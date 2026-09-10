import { useEffect, useState, type SyntheticEvent } from 'react'
import { usePageTitle } from '../router'

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>

const GITHUB_USERNAME = 'delciomanico'
const CACHE_KEY = `github-repos-${GITHUB_USERNAME}-v1`
const CACHE_TTL = 1000 * 60 * 30

// Overrides the GitHub "homepage" field for repos whose live domain differs from what's set there.
const DEMO_OVERRIDES: Record<string, string> = {
  bchiwale: 'https://bchiwale.ao',
}

// mshots generates screenshots async: the first request returns a fixed 400x300
// "Generating Preview…" placeholder while it renders the page in the background.
const MSHOTS_PLACEHOLDER_SIZE = { width: 400, height: 300 }
const MSHOTS_MAX_ATTEMPTS = 6
const MSHOTS_RETRY_DELAY_MS = 3000

function RepoPreview({ demoUrl, fallbackSrc, alt }: { demoUrl: string | null; fallbackSrc: string; alt: string }) {
  const [attempt, setAttempt] = useState(0)
  const usingDemoShot = demoUrl !== null && attempt <= MSHOTS_MAX_ATTEMPTS
  const src = usingDemoShot
    ? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(demoUrl!)}?w=1000${attempt > 0 ? `&attempt=${attempt}` : ''}`
    : fallbackSrc

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const img = event.currentTarget
    const isPlaceholder = img.naturalWidth === MSHOTS_PLACEHOLDER_SIZE.width && img.naturalHeight === MSHOTS_PLACEHOLDER_SIZE.height
    if (usingDemoShot && isPlaceholder && attempt < MSHOTS_MAX_ATTEMPTS) {
      setTimeout(() => setAttempt((a) => a + 1), MSHOTS_RETRY_DELAY_MS)
    }
  }

  return <img className="gallery-media" src={src} alt={alt} loading="lazy" onLoad={handleLoad} />
}

type Repo = {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  fork: boolean
  archived: boolean
  updated_at: string
}

type FetchState =
  | { status: 'loading' }
  | { status: 'error' }
  | { status: 'ready'; repos: Repo[] }

function readCache(): Repo[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { timestamp, repos } = JSON.parse(raw) as { timestamp: number; repos: Repo[] }
    if (Date.now() - timestamp > CACHE_TTL) return null
    return repos
  } catch {
    return null
  }
}

function writeCache(repos: Repo[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify({ timestamp: Date.now(), repos }))
  } catch {
    // sessionStorage unavailable (e.g. private browsing) — cache is a nice-to-have, safe to skip
  }
}

export function ProjectPage() {
  usePageTitle('Projetos — Delcio Monarca')
  const [state, setState] = useState<FetchState>({ status: 'loading' })

  useEffect(() => {
    const cached = readCache()
    if (cached) {
      setState({ status: 'ready', repos: cached })
      return
    }
    let cancelled = false
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API respondeu ${res.status}`)
        return res.json() as Promise<Repo[]>
      })
      .then((repos) => {
        if (cancelled) return
        const visible = repos.filter((repo) => !repo.fork && !repo.archived)
        writeCache(visible)
        setState({ status: 'ready', repos: visible })
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error' })
      })
    return () => { cancelled = true }
  }, [])

  return <section className="inner-page">
    <p className="page-label">02 — PROJETOS</p>
    <h1>Repositórios<br /><i>públicos.</i></h1>

    {state.status === 'loading' && <p className="lead gallery-status">A carregar repositórios do GitHub…</p>}

    {state.status === 'error' && <p className="lead gallery-status">
      Não foi possível carregar os repositórios agora. Veja diretamente em{' '}
      <a className="simple-link" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer">github.com/{GITHUB_USERNAME} ↗</a>
    </p>}

    {state.status === 'ready' && state.repos.length === 0 && <p className="lead gallery-status">Nenhum repositório público encontrado.</p>}

    {state.status === 'ready' && state.repos.length > 0 && <div className="gallery-grid">
      {state.repos.map((repo, index) => {
        const demoHref = DEMO_OVERRIDES[repo.name] ?? repo.homepage
        const fallbackSrc = `https://opengraph.githubassets.com/1/${repo.full_name}`
        const visualHref = demoHref ?? repo.html_url
        return <article className="gallery-card" key={repo.id}>
          <a className="gallery-visual" href={visualHref} target="_blank" rel="noreferrer" aria-label={demoHref ? `Ver demo de ${repo.name}` : `Ver ${repo.name} no GitHub`}>
            <RepoPreview demoUrl={demoHref} fallbackSrc={fallbackSrc} alt={demoHref ? `Captura de ecrã da página inicial de ${repo.name}` : `Página do repositório ${repo.name} no GitHub`} />
            <span>{String(index + 1).padStart(2, '0')}</span>
          </a>
          <div className="gallery-content">
            <p className="work-tag">{repo.language ?? 'Código'}{repo.stargazers_count > 0 ? ` · ★ ${repo.stargazers_count}` : ''}</p>
            <h2>{repo.name}</h2>
            <p>{repo.description ?? 'Sem descrição.'}</p>
            <div className="project-actions">
              <a className="button" href={repo.html_url} target="_blank" rel="noreferrer">Ver código <Arrow /></a>
              {demoHref
                ? <a className="secondary-button" href={demoHref} target="_blank" rel="noreferrer">Ver demo</a>
                : <a className="secondary-button" href={`https://github.com/codespaces/new?repo=${encodeURIComponent(repo.full_name)}`} target="_blank" rel="noreferrer">Abrir ambiente de teste</a>}
            </div>
          </div>
        </article>
      })}
    </div>}
  </section>
}
