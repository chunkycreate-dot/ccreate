const S = { stroke: '#0E1A4F', strokeWidth: 4, strokeLinejoin: 'round' as const }
// Hero: a stack of chunky blocks + lightbulb + document + robot face = ideas, AI, digital products
export function HeroArt() {
  return (
    <svg viewBox="0 0 440 400" className="w-full max-w-lg mx-auto" role="img" aria-label="Playful stack of colorful blocks with a lightbulb, a document and a robot face">
      <line x1="10" y1="372" x2="430" y2="372" {...S} />
      <rect x="30" y="300" width="120" height="72" rx="8" fill="#1F3FBF" {...S} />
      <rect x="150" y="320" width="130" height="52" rx="8" fill="#FFC21A" {...S} />
      <path d="M280 372 L330 270 L380 372Z" fill="#F26B21" {...S} />
      <rect x="60" y="210" width="110" height="90" rx="8" fill="#1FA79A" {...S} />
      <g className="bob"><rect x="190" y="210" width="90" height="110" rx="8" fill="#FBF6E9" {...S} />
        <path d="M210 240h50M210 262h50M210 284h30" stroke="#0E1A4F" strokeWidth="5" strokeLinecap="round" /></g>
      <rect x="90" y="120" width="110" height="90" rx="14" fill="#F26B21" {...S} />
      <circle cx="123" cy="160" r="9" fill="#FBF6E9" {...S} /><circle cx="168" cy="160" r="9" fill="#FBF6E9" {...S} />
      <path d="M118 190q27 14 54 0" fill="none" {...S} /><path d="M145 120V96" {...S} /><circle cx="145" cy="90" r="9" fill="#FFC21A" {...S} />
      <g className="bob" style={{ animationDelay: '1s' }}><circle cx="320" cy="150" r="46" fill="#FFC21A" {...S} />
        <rect x="302" y="190" width="36" height="26" rx="6" fill="#1F3FBF" {...S} /><path d="M308 150q12-24 24 0" fill="none" {...S} /></g>
      <circle cx="400" cy="70" r="18" fill="#1F3FBF" {...S} className="bob" /><path d="M40 70l24-30 24 30z" fill="#1FA79A" {...S} className="bob" />
    </svg>
  )
}
// Default product cover (used until a real image is set in products.ts)
export function CoverArt({ tone }: { tone: string }) {
  return (
    <svg viewBox="0 0 320 200" className="w-full" aria-hidden>
      <rect x="95" y="25" width="130" height="160" rx="10" fill="#FBF6E9" {...S} transform="rotate(-5 160 105)" />
      <path d="M120 70h80M120 95h80M120 120h50" stroke="#0E1A4F" strokeWidth="6" strokeLinecap="round" transform="rotate(-5 160 105)" />
      <circle cx="235" cy="60" r="26" fill={tone === 'sun' ? '#F26B21' : '#FFC21A'} {...S} /><rect x="50" y="130" width="46" height="46" rx="8" fill="#F26B21" {...S} />
      <path d="M255 185l24-44 24 44z" fill="#1FA79A" {...S} />
    </svg>
  )
}
export const bg = { royal: 'bg-royal text-cream', teal: 'bg-teal text-ink', orange: 'bg-orange text-ink', sun: 'bg-sun text-ink' }
