import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProduct } from '../data/products'
import { CoverArt, bg } from './Art'
import BuyButton from './BuyButton'

export default function ProductPage() {
  const { slug } = useParams(); const p = getProduct(slug)
  useEffect(() => { document.title = p ? `${p.name} — ChunkyCreate` : 'Not found — ChunkyCreate'; window.scrollTo(0, 0) }, [p])
  if (!p) return <div className="wrap py-24"><h1 className="text-5xl">Product not found</h1><Link to="/#products" className="btn bg-orange mt-6">Back to products</Link></div>
  const List = ({ items }: { items: string[] }) => <ul className="mt-3 grid gap-2">{items.map(i => <li key={i} className="flex gap-3"><span className="font-display text-orange">■</span>{i}</li>)}</ul>
  return (
    <article className="wrap pt-8">
      <Link to="/#products" className="font-bold underline">← Back to products</Link>
      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <div className="md:sticky md:top-24 self-start">
          <div className={`card ${bg[p.color]} p-5 hover:!translate-y-0 hover:!rotate-0`}><div className="bg-cream/20 rounded-2xl p-2">{p.image ? <img src={p.image} alt={p.name} className="rounded-xl w-full" /> : <CoverArt tone={p.color} />}</div></div>
          <div className="card bg-sun p-5 mt-7 hover:!translate-y-0 hover:!rotate-0"><h3 className="text-2xl">Product format</h3><p className="mt-2 font-bold">{p.format}</p><p>Instant digital resource.</p>
            <h3 className="text-2xl mt-4">Use with</h3><p className="mt-2 font-medium">{p.useWith.join(' • ')}</p></div>
        </div>
        <div>
          <h1 className="text-5xl md:text-6xl text-royal">{p.name}</h1>
          <p className="mt-4 text-xl">{p.description}</p>
          <div className="mt-6"><BuyButton p={p} /></div>
          <h2 className="text-3xl mt-10">About this product</h2>
          {p.longDescription.split('\n\n').map(t => <p key={t} className="mt-3 text-lg">{t}</p>)}
          <h2 className="text-3xl mt-10">What you can build with it</h2>
          <p className="mt-3 text-lg">The product specification can be used as the foundation for an application that helps users move between careers such as:</p><List items={p.canBuild} />
          <h2 className="text-3xl mt-10">Why this product?</h2>
          <p className="mt-3 text-lg">{p.whyIntro}</p>
          <ol className="mt-3 flex flex-wrap gap-2">{p.whyChain.map((c, i) => <li key={c} className="border-4 border-ink rounded-xl bg-teal px-3 py-1 font-bold">{c}{i < p.whyChain.length - 1 && <span aria-hidden> →</span>}</li>)}</ol>
          <p className="mt-4 text-lg font-bold">{p.whyOutcome}</p>
          <h2 className="text-3xl mt-10">What you'll get</h2><List items={p.whatYouGet} />
          <h2 className="text-3xl mt-10">Who it's for</h2><List items={p.whoItsFor} />
          <div className="mt-10"><BuyButton p={p} /></div>
        </div>
      </div>
    </article>
  )
}
