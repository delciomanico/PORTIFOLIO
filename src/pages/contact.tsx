type Contact = { label: string; value: string; href: string }

const contacts: Contact[] = [
  { label: 'Email', value: 'monarcadev.full@gmail.com', href: 'mailto:monarcadev.full@gmail.com' },
  { label: 'GitHub', value: '@delciomanico', href: 'https://github.com/delciomanico' },
  { label: 'LinkedIn', value: '/in/monarcadev', href: 'https://www.linkedin.com/in/monarcadev' },
  { label: 'WhatsApp', value: '+244 926 283 434', href: 'https://wa.me/244926283434' },
]

export function ContactPage() {
  return <section className="inner-page contact-page">
    <p className="page-label">04 — CONTACTO</p>
    <h1>Vamos conversar<br /><i>sobre o seu projeto.</i></h1>
    <p className="lead contact-lead">Respondo rápido por email ou WhatsApp. Também estou no GitHub e no LinkedIn.</p>
    <div className="contact-grid">
      {contacts.map(({ label, value, href }) => <a
        className="contact-card"
        key={label}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        <span className="page-label">{label}</span>
        <strong>{value}</strong>
      </a>)}
    </div>
  </section>
}
