import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
const links = [['Home', '/'], ['Products', '/#products'], ['About', '/#about'], ['Contact', '/#contact']]
export const Logo = ({ light }: { light?: boolean }) => (
  <Link to="/" className="font-display text-2xl tracking-wide"><span className={light ? 'text-cream' : 'text-royal'}>CHUNKY</span><span className="text-orange">CREATE</span></Link>
)
export function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-30 bg-cream/95 backdrop-blur border-b-4 border-ink">
      <nav className="wrap flex items-center justify-between h-16" aria-label="Main">
        <Logo />
        <div className="hidden md:flex items-center gap-7 font-bold">
          {links.map(([t, h]) => <a key={t} href={h} className="hover:text-orange transition-colors">{t}</a>)}
          <a href="/#products" className="btn bg-orange !py-2 !text-base">Explore products</a>
        </div>
        <button className="md:hidden border-4 border-ink rounded-lg px-3 py-1 font-display" aria-expanded={open} aria-label="Menu" onClick={() => setOpen(!open)}>{open ? 'CLOSE' : 'MENU'}</button>
      </nav>
      {open && <div className="md:hidden wrap pb-5 grid gap-1 font-display text-3xl">
        {links.map(([t, h]) => <a key={t} href={h} onClick={() => setOpen(false)} className="py-2 border-b-2 border-ink/20">{t}</a>)}
        <a href="/#products" className="btn bg-orange text-center mt-3" onClick={() => setOpen(false)}>Explore products</a></div>}
    </header>
  )
}
export function Footer() {
  return (
    <footer className="bg-royal text-cream border-t-4 border-ink mt-20">
      <div className="wrap py-10 grid gap-6 md:grid-cols-3 items-center">
        <div><Logo light /><p className="mt-2">Digital Products, AI Resources &amp; Creative Tools.</p></div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 font-bold">{links.map(([t, h]) => <li key={t}><a href={h}>{t}</a></li>)}</ul>
        <div className="md:text-right"><a className="underline font-bold" href="mailto:chunkycreate@gmail.com">chunkycreate@gmail.com</a>
          <p className="text-sm mt-2 opacity-80">© 2026 ChunkyCreate. All rights reserved.</p></div>
      </div>
    </footer>
  )
}
