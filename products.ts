// ★ THE ONE FILE TO EDIT FOR PRODUCTS. Add a product = add one object to the array.
export type Status = 'coming-soon' | 'available'
export interface Product {
  id: string; slug: string; name: string
  description: string; longDescription: string   // longDescription: separate paragraphs with a blank line
  buyLabel: string; format: string; useWith: string[]; canBuild: string[]
  whyIntro: string; whyChain: string[]; whyOutcome: string
  whatYouGet: string[]; whoItsFor: string[]
  price: number | null            // INR. The SERVER reads this too to charge the right amount.
  status: Status
  image: string | null            // cover image URL or /products/xyz.png. null = built-in illustration
  color: 'royal' | 'teal' | 'orange' | 'sun'
  downloadUrl: string | null      // PRIVATE R2 object key (file name inside the private PDF bucket). Never a public link.
  razorpayId: string | null
}
export const products: Product[] = [
  {
    id: 'product-01', slug: 'ai-career-consultant-master-prompt', name: 'AI Career Consultant Master Prompt',
    description: 'A complete product specification for building an AI career consulting app for working professionals.',
    longDescription: 'Build your AI Career Consultant idea into a real product.\n\nThis master product prompt contains the complete product vision and functional specification for creating an AI-powered career consulting platform designed specifically for working professionals.\n\nIt defines how the application should understand a user\'s current career, identify their goals, analyze skill gaps, recommend career pathways, create personalized learning roadmaps, recommend courses and education options, and provide ongoing AI career guidance.\n\nInstead of starting from a blank page, use this document as the master product brief for Claude, ChatGPT, developers, product managers, or your own AI coding workflow.',
    buyLabel: 'Get the Master Prompt',
    format: 'PDF Digital Product',
    useWith: ['Claude', 'ChatGPT', 'AI Coding Tools', 'Developers', 'Product Teams'],
    canBuild: ['Sales → Web Development', 'Product Management → Graphic Design', 'Software Engineering → Marketing / Sales', 'Doctor / Dentist → Digital Clinic Growth', '…and many other career transitions'],
    whyIntro: "Don't randomly choose a course. First understand:",
    whyChain: ['Who you are', 'Where you are', 'Where you want to go', 'What you know', "What you're missing", 'What you can afford', 'How much time you have'],
    whyOutcome: 'Then build a realistic, personalized career roadmap.',
    whatYouGet: ['Complete AI Career Consultant product specification', 'Product vision and core value proposition', 'Detailed user journey', 'User registration and assessment flow', 'Professional and educational assessment framework', 'Career goal assessment', 'Skill-gap analysis framework', 'Transferable-skills analysis', 'AI career recommendation engine', 'Personalized career roadmap structure', 'Career transition timeline', 'Course and learning-resource recommendation system', 'College and formal-education recommendation framework', 'Entrance-examination guidance', 'Alternative career pathway system', 'Monetization concept with payment aggregator', 'OpenAI backend integration requirements', 'Structured AI output / JSON requirements', 'User dashboard requirements', 'AI Career Consultant chat functionality', 'Recommended technology architecture', 'Future product expansion ideas'],
    whoItsFor: ['Developers', 'Product managers and product teams', 'Anyone building with Claude, ChatGPT or AI coding tools'],
    price: 49, status: 'available', color: 'royal',
    image: 'https://pub-cc065c379e13435b8649665ef74554e9.r2.dev/All-in-One%20Career%20Growth%20App%20(1).png',
    downloadUrl: 'PROMPT_APP_WORKINGPROFESSIONAL.pdf', razorpayId: null,
  },
]
export const getProduct = (slug?: string) => products.find(p => p.slug === slug)
export const formatPrice = (p: number | null) => (p == null ? 'Price coming soon' : `₹${p}`)
