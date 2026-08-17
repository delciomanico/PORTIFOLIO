const skills = [
  ['01', 'Backend', 'Node.js, TypeScript, APIs REST, autenticação, bases de dados e integrações.'],
  ['02', 'Cloud & DevOps', 'Docker, Kubernetes, CI/CD, Linux, cloud e infraestrutura como código.'],
  ['03', 'Confiabilidade', 'Logs, métricas, alertas, segurança e melhoria contínua dos serviços.'],
]

export function SkillsPage() {
  return <section className="inner-page skills-page"><p className="page-label">03 — COMPETÊNCIAS</p><h1>Ferramentas para<br />criar o que <i>importa.</i></h1><div className="skills-list">{skills.map(([number, title, text]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section>
}
