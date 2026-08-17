import { useRef, useState, type KeyboardEvent } from 'react'

const projects = [
  ['01', 'API de pagamentos', 'Serviço seguro e escalável para processar transações, webhooks e reconciliação de dados.', 'Node.js · PostgreSQL · Redis'],
  ['02', 'Plataforma cloud', 'Infraestrutura automatizada, versionada e preparada para crescimento em ambiente cloud.', 'Docker · Kubernetes · CI/CD'],
  ['03', 'Observabilidade', 'Centralização de logs, métricas e alertas para antecipar falhas e melhorar a operação.', 'Prometheus · Grafana · ELK'],
]

export function ProjectPage() {
  const carousel = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)
  const move = (direction: number) => carousel.current?.scrollBy({ left: direction * carousel.current.clientWidth * .82, behavior: 'smooth' })
  const updateActiveProject = () => {
    const element = carousel.current
    if (!element) return
    setActiveProject(Math.round(element.scrollLeft / element.clientWidth))
  }
  const handleKeys = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') { event.preventDefault(); move(1) }
    if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1) }
  }

  return <section className="inner-page projects-page">
    <div className="projects-heading"><div><p className="page-label">02 — PROJETOS</p><h1>Trabalhos<br /><i>selecionados.</i></h1></div><div className="carousel-controls"><button onClick={() => move(-1)} aria-label="Projeto anterior">←</button><button onClick={() => move(1)} aria-label="Próximo projeto">→</button></div></div>
    <div className="projects-carousel" ref={carousel} tabIndex={0} onScroll={updateActiveProject} onKeyDown={handleKeys} aria-label="Carrossel de projetos. Use as setas esquerda e direita para navegar.">
      {projects.map(([number, title, description, tag]) => <article className="project-slide" key={number}>
        <div className={`project-visual art-${number}`}><span>{number}</span><div className="project-symbol">{number}</div></div>
        <div className="project-content"><p className="work-tag">{tag}</p><h2>{title}</h2><p>{description}</p><a href="mailto:ola@delciomonarca.com">Ver projeto ↗</a></div>
      </article>)}
    </div><div className="carousel-status" aria-live="polite"><span>{String(activeProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span><div>{projects.map((project, index) => <i className={index === activeProject ? 'selected' : ''} key={project[0]} />)}</div><small>Deslize para explorar</small></div>
  </section>
}
