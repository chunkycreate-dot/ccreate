import { products } from '../../src/data/products'
import { json, rzAuth } from '../_lib'
// Price comes from products.ts on the SERVER, never from the browser.
export const onRequestPost = async ({ request, env }: any) => {
  const { productId } = await request.json().catch(() => ({}))
  const p = products.find(x => x.id === productId)
  if (!p || p.status !== 'available' || !p.price) return json({ error: 'This product is not for sale.' }, 400)
  const r = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST', headers: { Authorization: rzAuth(env), 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: p.price * 100, currency: 'INR', receipt: `${p.id}-${Date.now()}`, notes: { productId: p.id } }),
  })
  if (!r.ok) return json({ error: 'Could not start the payment. Please try again.' }, 502)
  const o: any = await r.json()
  return json({ orderId: o.id, amount: o.amount, currency: o.currency, keyId: env.RAZORPAY_KEY_ID })
}
