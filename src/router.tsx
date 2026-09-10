import { createContext, useContext, useEffect, useState, type AnchorHTMLAttributes, type ReactNode } from 'react'

function normalize(pathname: string) {
  return pathname.replace(/\/$/, '') || '/'
}

type RouterState = { pathname: string; navigate: (to: string) => void }

const RouterContext = createContext<RouterState | null>(null)

export function RouterProvider({ children }: { children: ReactNode }) {
  const [pathname, setPathname] = useState(() => normalize(window.location.pathname))

  useEffect(() => {
    const onPopState = () => setPathname(normalize(window.location.pathname))
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (to: string) => {
    const target = normalize(to)
    if (target === pathname) return
    window.history.pushState({}, '', to)
    setPathname(target)
    window.scrollTo(0, 0)
  }

  return <RouterContext.Provider value={{ pathname, navigate }}>{children}</RouterContext.Provider>
}

export function usePathname() {
  const ctx = useContext(RouterContext)
  if (!ctx) throw new Error('usePathname must be used within a RouterProvider')
  return ctx.pathname
}

export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => { document.title = previous }
  }, [title])
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Link({ href, onClick, ...props }: LinkProps) {
  const ctx = useContext(RouterContext)
  return <a
    href={href}
    onClick={(event) => {
      onClick?.(event)
      if (event.defaultPrevented) return
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      event.preventDefault()
      ctx?.navigate(href)
    }}
    {...props}
  />
}
