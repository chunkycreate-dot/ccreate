import type { Product } from '../data/products'
declare global { interface Window { Razorpay: any } }
export type Purchase = { paymentId: string; token: string }
const KEY = 'cc_purchases'
export const getPurchase = (id: string): Purchase | null => { try { return JSON.parse(localStorage.getItem(KEY) || '{}')[id] ?? null } catch { return null } }
const save = (id: string, p: Purchase) => { try { const all = JSON.parse(localStorage.getItem(KEY) || '{}'); all[id] = p; localStorage.setItem(KEY, JSON.stringify(all)) } catch {} }
export const downloadUrl = (id: string, p: Purchase) => `/api/download?productId=${id}&paymentId=${p.paymentId}&token=${p.token}`
const loadScript = () => new Promise<void>((res, rej) => {
  if (window.Razorpay) return res()
  const s = document.createElement('script'); s.src = 'https://checkout.razorpay.com/v1/checkout.js'
  s.onload = () => res(); s.onerror = () => rej(new Error('Could not load the payment window. Check your connection.')); document.body.appendChild(s)
})
const post = (url: string, body: unknown) => fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
// Opens the Razorpay popup. Resolves with a purchase (saved in this browser) only after the server verified the payment.
export async function startCheckout(p: Product): Promise<Purchase> {
  await loadScript()
  const r = await post('/api/create-order', { productId: p.id }); const o = await r.json()
  if (!r.ok) throw new Error(o.error || 'Checkout is unavailable right now.')
  return new Promise((resolve, reject) => {
    const rz = new window.Razorpay({
      key: o.keyId, amount: o.amount, currency: o.currency, order_id: o.orderId, name: 'ChunkyCreate', description: p.name, theme: { color: '#1F3FBF' },
      handler: async (x: any) => {
        try {
          const v = await post('/api/verify', { productId: p.id, orderId: x.razorpay_order_id, paymentId: x.razorpay_payment_id, signature: x.razorpay_signature })
          const d = await v.json(); if (!v.ok) throw new Error(d.error || 'Payment could not be verified.')
          const pur = { paymentId: x.razorpay_payment_id, token: d.token }; save(p.id, pur); resolve(pur)
        } catch (e) { reject(e) }
      },
      modal: { ondismiss: () => reject(new Error('cancelled')) },
    })
    rz.on('payment.failed', () => reject(new Error('Payment failed. Please try again.')))
    rz.open()
  })
}
