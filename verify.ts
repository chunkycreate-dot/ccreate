import { json, hmacHex, safeEqual, rzAuth, downloadToken } from '../_lib'
// Confirms the payment really happened, then issues a download token tied to this payment.
export const onRequestPost = async ({ request, env }: any) => {
  const { productId, orderId, paymentId, signature } = await request.json().catch(() => ({}))
  if (!productId || !orderId || !paymentId || !signature) return json({ error: 'Missing payment details.' }, 400)
  const expected = await hmacHex(env.RAZORPAY_KEY_SECRET, `${orderId}|${paymentId}`)
  if (!safeEqual(expected, signature)) return json({ error: 'Payment verification failed.' }, 400)
  const r = await fetch(`https://api.razorpay.com/v1/orders/${orderId}`, { headers: { Authorization: rzAuth(env) } })
  const o: any = r.ok ? await r.json() : null
  if (!o || o.notes?.productId !== productId || o.status !== 'paid') return json({ error: 'Order does not match this product.' }, 400)
  return json({ token: await downloadToken(env, productId, paymentId) })
}
