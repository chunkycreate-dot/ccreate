import { products } from '../../src/data/products'
import { safeEqual, downloadToken } from '../_lib'
// Streams the PDF from the PRIVATE R2 bucket (binding PDF_BUCKET) only when the token matches a verified payment.
export const onRequestGet = async ({ request, env }: any) => {
  const u = new URL(request.url)
  const productId = u.searchParams.get('productId') || '', paymentId = u.searchParams.get('paymentId') || '', token = u.searchParams.get('token') || ''
  const p = products.find(x => x.id === productId)
  if (!p?.downloadUrl || !paymentId || !safeEqual(await downloadToken(env, productId, paymentId), token)) return new Response('Not authorised', { status: 403 })
  const obj = await env.PDF_BUCKET.get(p.downloadUrl)
  if (!obj) return new Response('File not found', { status: 404 })
  return new Response(obj.body, { headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': `attachment; filename="${p.slug}.pdf"`, 'Cache-Control': 'private, no-store' } })
}
