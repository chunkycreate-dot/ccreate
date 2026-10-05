import { useState } from 'react'
import { formatPrice, type Product } from '../data/products'
import { startCheckout, getPurchase, downloadUrl, type Purchase } from '../lib/checkout'
export default function BuyButton({ p }: { p: Product }) {
  const [busy, setBusy] = useState(false); const [err, setErr] = useState('')
  const [purchase, setPurchase] = useState<Purchase | null>(() => getPurchase(p.id))
  if (p.status !== 'available') return <button disabled className="btn bg-sun opacity-70 cursor-not-allowed">Coming soon</button>
  if (purchase) return <div><a href={downloadUrl(p.id, purchase)} className="btn bg-teal">Download your PDF</a><p className="text-sm mt-2 font-medium">Payment ID: {purchase.paymentId}. Keep it safe.</p></div>
  const buy = async () => {
    setBusy(true); setErr('')
    try { setPurchase(await startCheckout(p)) } catch (e: any) { if (e.message !== 'cancelled') setErr(e.message) } finally { setBusy(false) }
  }
  return (
    <div>
      <button onClick={buy} disabled={busy} className="btn bg-orange text-cream disabled:opacity-60">{busy ? 'Opening payment…' : `${p.buyLabel} — ${formatPrice(p.price)}`}</button>
      <p className="text-sm mt-2 font-medium">Instant access after payment</p>
      {err && <p role="alert" className="mt-2 font-bold text-orange">{err}</p>}
    </div>
  )
}
