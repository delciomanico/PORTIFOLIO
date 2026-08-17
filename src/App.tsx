import './App.css'
import { SideBar } from './components/sidebar'
import { AboutPage } from './pages/about'
import { ProjectPage } from './pages/projects'
import { SkillsPage } from './pages/skills'

const Arrow = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>

const homeSlides = [
  '/images/instagram-first.webp',
  '/images/github-avatar.png',
  'https://media.licdn.com/dms/image/v2/D4D22AQE3LMOdorNvVg/feedshare-shrink_480/B4DZ.VwXj7JQAg-/0/1784923912992?e=1788393600&v=beta&t=wcZu5sEh2mwxbvOuRgzt3USdcSf9PsZ88dz_S-LswaM',
  'https://media.licdn.com/dms/image/v2/D4D22AQFFYrz5ucxRqw/feedshare-shrink_480/B4DZ634paBJAAg-/0/1781201543524?e=1788393600&v=beta&t=Fm-bUabMMoevRp7c2fVPDRD08VpRC5E4Rv7rCaLm7og',
 ]

function HomePage() {
  return <section className="home page">
    <div className="home-content">
      <p className="kicker">BACKEND DEVELOPER · DEVOPS</p>
      <h1>Delcio Monarca</h1>
      <p className="lead">Construo sistemas robustos, APIs escaláveis e infraestrutura confiável para produtos digitais.</p>
      <div className="hero-actions"><a className="button" href="/projects">Ver projetos <Arrow /></a><a className="secondary-button" href="mailto:ola@delciomonarca.com">Contactar</a></div>
    </div>
    <div className="home-visual" aria-hidden="true">
      <div className="visual-scroll">
        <div className="visual-track">
          {[...homeSlides, ...homeSlides].map((src, index) => (
            <div className="visual-slide" key={`${src}-${index}`}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
}

function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/'
  const Page = pathname === '/about' ? AboutPage : pathname === '/projects' ? ProjectPage : pathname === '/skills' ? SkillsPage : HomePage
  return <div className="app"><SideBar currentPath={pathname} /><main><Page /></main></div>
}

export default App
