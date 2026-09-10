const skills = [
  ['01', 'Backend & APIs', 'APIs RESTful, arquitetura backend e deploy de aplicações com TypeScript, Node.js, NestJS, Next.js e Express.'],
  ['02', 'Infraestrutura & DevOps', 'Administração de servidores Linux, conteinerização com Docker, automação de processos e Git.'],
  ['03', 'Dados & IA', 'Modelagem e gestão de bases de dados, desenvolvimento fullstack e integração de Inteligência Artificial em plataformas.'],
]

const credentials = [
  { title: '1.º lugar no Lispa Hack', year: '2025' },
  { title: '2.º lugar no Lispa Hack', year: '2023' },
  { title: 'Simplilearn — Node.js', year: '2024' },
  { title: 'Alura — Inteligência Artificial', year: null },
  { title: 'Unitel Code Web — Desenvolvimento Web', year: '2021' },
  { title: 'Mundo da Tecnologia — Redes de Computadores', year: null },
]

export function SkillsPage() {
  return <section className="inner-page skills-page">
    <p className="page-label">03 — COMPETÊNCIAS</p>
    <h1>Ferramentas para<br />criar o que <i>importa.</i></h1>
    <div className="skills-list">{skills.map(([number, title, text]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div>

    <section className="experiences-section">
      <p className="page-label">PRÉMIOS E CERTIFICADOS</p>
      <ul className="credential-list">
        {credentials.map((credential) => (
          <li className="credential-card" key={credential.title}>
            <span>{credential.title}</span>
            {credential.year && <span className="credential-year">{credential.year}</span>}
          </li>
        ))}
      </ul>
    </section>
  </section>
}
