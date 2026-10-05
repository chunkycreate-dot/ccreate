import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer } from './components/Layout'
import { Hero, Products, Why, About, Contact } from './components/Sections'
import ProductPage from './components/ProductPage'

const Home = () => { useEffect(() => { document.title = 'ChunkyCreate — Digital Products, AI Resources & Creative Tools' }, []); return <><Hero /><Products /><Why /><About /><Contact /></> }
export default function App() {
  const { hash, pathname } = useLocation()
  useEffect(() => { if (hash) setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 50) }, [hash, pathname])
  return <><Navbar /><main><Routes><Route path="/" element={<Home />} /><Route path="/products/:slug" element={<ProductPage />} /><Route path="*" element={<ProductPage />} /></Routes></main><Footer /></>
}
