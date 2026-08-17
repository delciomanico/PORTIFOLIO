type SideBarProps = { currentPath: string }

const HomeIcon = () => <svg viewBox="0 0 24 24"><path d="m3 10 9-7 9 7v10H3V10Zm6 10v-6h6v6" /></svg>
const UserIcon = () => <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 21c.8-4.1 3.5-6 8-6s7.2 1.9 8 6" /></svg>
const GridIcon = () => <svg viewBox="0 0 24 24"><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><rect x="14" y="14" width="6" height="6" /></svg>
const SparkIcon = () => <svg viewBox="0 0 24 24"><path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3ZM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></svg>

const links = [
  { href: '/', label: 'Início', Icon: HomeIcon },
  { href: '/about', label: 'Sobre', Icon: UserIcon },
  { href: '/projects', label: 'Projetos', Icon: GridIcon },
  { href: '/skills', label: 'Competências', Icon: SparkIcon },
]

export function SideBar({ currentPath }: SideBarProps) {
  return <aside className="nav">
    <a className="logo" href="/">DM<span>.</span></a>
    <nav aria-label="Navegação principal">
      {links.map(({ href, label, Icon }) => <a key={href} aria-current={currentPath === href ? 'page' : undefined} className={currentPath === href ? 'active' : ''} href={href}><Icon /><span>{label}</span></a>)}
    </nav>
    <div className="nav-footer"><p><i /> Disponível para projetos</p><a className="contact-link" href="mailto:ola@delciomonarca.com">Contacto ↗</a></div>
  </aside>
}
