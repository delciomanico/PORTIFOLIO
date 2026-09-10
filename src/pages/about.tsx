export function AboutPage() {
  const experiences = [
    {
      role: 'Desenvolvedor Fullstack',
      company: 'IPGUL — Instituto de Planeamento e Gestão Urbana de Luanda',
      period: '2024 — Presente',
      details: 'Digitalização de serviços públicos, com análise e mitigação de problemas de organização através da automação de processos.'
    },
    {
      role: 'Técnico de Informática',
      company: 'CASSFREI',
      period: '2025 — Presente',
      details: 'Assistência técnica, consultoria informática e desenvolvimento de softwares territoriais para uma empresa de serviços topográficos.'
    },
    {
      role: 'Desenvolvedor Backend',
      company: 'Startup Olela',
      period: '2024',
      details: 'Desenvolvimento de plataforma agrícola com integração de IA. Participação no desafio Lispa Hack 2024.'
    },
    {
      role: 'Desenvolvedor Backend',
      company: 'Vion Inovation',
      period: '2021 — 2026',
      details: 'Definição de arquiteturas técnicas, implementação de APIs e suporte ao desenvolvimento de soluções baseadas em IA.'
    },
  ]

  const education = [
    {
      school: 'Escola 42 Luanda',
      period: '2025 — Presente',
      details: 'Especialização em programação e administração de sistemas: programação dinâmica com C e C++, computação gráfica e desenvolvimento web fullstack.'
    },
    {
      school: 'Instituto Médio Politécnico 17 de Dezembro',
      period: '2021 — 2025',
      details: 'Técnico Médio do Curso de Informática.'
    },
  ]

  return <section className="inner-page">
    <p className="page-label">01 — SOBRE MIM</p>
    <div className="split intro-split">
      <h1>Backend e<br /><i>sistemas</i><br />bem estruturados.</h1>
      <div className="copy"><p>Sou Delcio Monarca, desenvolvedor Backend. Gosto de transformar requisitos complexos em sistemas robustos e bem estruturados, aplicando conhecimentos em APIs, bases de dados, servidores Linux e automação.</p><p>O meu objetivo é sempre o mesmo: desenvolver soluções que melhorem processos, desempenho e a experiência de quem usa o que construo.</p><a className="simple-link" href="mailto:monarcadev.full@gmail.com">Vamos trabalhar juntos ↗</a></div>
    </div>
    <div className="facts"><div><span>Foco</span><strong>Backend & Fullstack</strong></div><div><span>Localização</span><strong>Luanda, Angola</strong></div><div><span>Disponibilidade</span><strong>Projetos selecionados</strong></div></div>

    <section className="experiences-section">
      <p className="page-label">EXPERIÊNCIAS</p>
      <ul className="experience-list">
        {experiences.map((exp) => (
          <li className="experience-card" key={`${exp.company}-${exp.role}`}>
            <div className="exp-row">
              <strong className="exp-role">{exp.role}</strong>
              <span className="exp-period">{exp.period}</span>
            </div>
            <div className="exp-company">{exp.company}</div>
            <p className="exp-desc">{exp.details}</p>
          </li>
        ))}
      </ul>
    </section>

    <section className="experiences-section">
      <p className="page-label">FORMAÇÃO</p>
      <ul className="experience-list">
        {education.map((item) => (
          <li className="experience-card" key={item.school}>
            <div className="exp-row">
              <strong className="exp-role">{item.school}</strong>
              <span className="exp-period">{item.period}</span>
            </div>
            <p className="exp-desc">{item.details}</p>
          </li>
        ))}
      </ul>
    </section>
  </section>
}
