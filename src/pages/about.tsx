export function AboutPage() {
  const experiences = [
    {
      role: 'Senior Backend Engineer',
      company: 'Empresa X',
      period: '2022 — Presente',
      details: 'Desenvolvimento de APIs escaláveis, otimização de performance e desenho de integrações com serviços externos.'
    },
    {
      role: 'DevOps Engineer',
      company: 'Empresa Y',
      period: '2019 — 2022',
      details: 'Automatização de pipelines CI/CD, infraestrutura como código e monitorização de ambientes de produção.'
    },
    {
      role: 'Backend Developer',
      company: 'Empresa Z',
      period: '2017 — 2019',
      details: 'Implementação de micro-serviços, testes automatizados e migração de bases de dados.'
    },
  ]

  return <section className="inner-page">
    <p className="page-label">01 — SOBRE MIM</p>
    <div className="split intro-split">
      <h1>Backend e<br /><i>infraestrutura</i><br />que escalam.</h1>
      <div className="copy"><p>Sou Delcio Monarca, desenvolvedor Backend e DevOps. Gosto de transformar requisitos complexos em serviços estáveis, seguros e fáceis de manter.</p><p>Trabalho desde a arquitetura da API até à automatização de deploys, monitorização e evolução contínua da infraestrutura.</p><a className="simple-link" href="mailto:ola@delciomonarca.com">Vamos trabalhar juntos ↗</a></div>
    </div>
    <div className="facts"><div><span>Foco</span><strong>Backend & DevOps</strong></div><div><span>Localização</span><strong>Luanda, Angola</strong></div><div><span>Disponibilidade</span><strong>Projetos selecionados</strong></div></div>

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
  </section>
}
