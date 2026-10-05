import { Link } from 'react-router-dom'
import { products, type Product } from '../data/products'
import BuyButton from './BuyButton'
import { HeroArt, CoverArt, bg } from './Art'

export function Hero() {
  return (
    <section className="wrap pt-10 md:pt-16 grid md:grid-cols-2 gap-8 items-center">
      <div className="pop">
        <h1 className="text-royal text-6xl sm:text-7xl lg:text-8xl">Where ideas<br />grow chunky<br />&amp; wild</h1>
        <p className="mt-6 text-lg max-w-md">Digital products, AI resources and creative tools built to help you create, learn and build.</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href="#products" className="btn bg-orange">Explore products</a><a href="#about" className="btn bg-cream">About me</a></div>
      </div>
      <HeroArt />
    </section>
  )
}
export function ProductCard({ p, wide }: { p: Product; wide?: boolean }) {
  return (
    <div className={`card ${bg[p.color]} p-5 ${wide ? 'md:grid md:grid-cols-2 md:gap-8 md:items-center md:p-8' : ''}`}>
      <Link to={`/products/${p.slug}`} aria-label={`View ${p.name}`} className="block bg-cream/20 rounded-2xl p-2">{p.image ? <img src={p.image} alt={p.name} className="rounded-xl w-full" loading="lazy" /> : <CoverArt tone={p.color} />}</Link>
      <div>
        <Link to={`/products/${p.slug}`}><h3 className="text-3xl md:text-4xl mt-4 md:mt-0">{p.name}</h3></Link>
        <p className="mt-2">{p.description}</p>
        <p className="mt-2 font-bold">{p.format}</p>
        <div className="mt-5 text-ink"><BuyButton p={p} /></div>
        <Link to={`/products/${p.slug}`} className="inline-block mt-4 font-bold underline">See what's inside</Link>
      </div>
    </div>
  )
}
export function Products() {
  return (
    <section id="products" className="wrap pt-24 scroll-mt-16">
      <h2 className="text-5xl md:text-6xl">My digital products</h2>
      <p className="mt-3 text-lg">Useful things I've created to help you learn, build and create.</p>
      <div className={`mt-8 grid gap-7 ${products.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''}`}>{products.map(p => <ProductCard key={p.id} p={p} wide={products.length === 1} />)}</div>
    </section>
  )
}
const why = [
  ['01', 'Practical', 'Built around real-world problems rather than just theory.', 'bg-royal text-cream'],
  ['02', 'AI-powered', 'Using AI and modern technology where it actually makes sense.', 'bg-teal text-ink'],
  ['03', 'Simple', 'Useful resources without unnecessary complexity.', 'bg-orange text-ink'],
  ['04', 'Creative', 'Ideas turned into products, experiments and things worth using.', 'bg-sun text-ink'],
]
export function Why() {
  return (
    <section className="wrap pt-24">
      <h2 className="text-5xl md:text-6xl">Why ChunkyCreate?</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {why.map(([n, t, d, c], i) => <div key={n} className={`card ${c} p-6 ${i % 2 ? 'lg:mt-6' : ''}`}><span className="font-display text-5xl opacity-60">{n}</span><h3 className="text-3xl mt-2">{t}</h3><p className="mt-3 font-medium">{d}</p></div>)}
      </div>
    </section>
  )
}
export function About() {
  return (
    <section id="about" className="wrap pt-24 scroll-mt-16">
      <div className="card bg-sun p-6 md:p-10 grid md:grid-cols-[260px_1fr] gap-8 items-center hover:!translate-y-0 hover:!rotate-0">
        {/* Replace this block with <img src="/nitish.jpg" ...> when you have a photo */}
        <div className="border-4 border-ink rounded-[2rem] bg-teal aspect-square grid place-items-center rotate-[-3deg] shadow-[6px_6px_0_#0E1A4F]"><span className="font-display text-7xl text-cream">NP</span></div>
        <div>
          <h2 className="text-4xl md:text-5xl">The person behind ChunkyCreate</h2>
          <p className="mt-4 text-lg"><b>I'm Nitish Pandey.</b> I've spent more than a decade in FinTech and payments, in sales, business development, merchant payments and partnerships, and I've seen up close how technology solves real business problems.</p>
          <p className="mt-3 text-lg">Outside work I explore AI, technology, content creation and building digital products. ChunkyCreate is my personal creative space where I turn ideas into practical things.</p>
          <blockquote className="mt-5 border-l-8 border-orange pl-4 font-display text-2xl md:text-3xl leading-tight">“I don't just want to build with technology. I want to build things that are actually useful.”</blockquote>
        </div>
      </div>
    </section>
  )
}
export function Contact() {
  return (
    <section id="contact" className="wrap pt-24 scroll-mt-16">
      <div className="card bg-orange p-8 md:p-12 text-center hover:!translate-y-0 hover:!rotate-0">
        <h2 className="text-5xl md:text-7xl text-cream [text-shadow:3px_3px_0_#0E1A4F]">Let's create something</h2>
        <p className="mt-4 text-lg max-w-xl mx-auto font-medium">Have an idea, question, collaboration opportunity or simply want to say hello?</p>
        <a href="mailto:chunkycreate@gmail.com" className="btn bg-cream mt-7">chunkycreate@gmail.com</a>
      </div>
    </section>
  )
}
