import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Books from './pages/Books'
import Journal from './pages/Journal'
import Speaking from './pages/Speaking'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { applyPageMeta } from './seo'
import './App.css'

export default function App() {
  const location = useLocation()
  useEffect(() => {
    applyPageMeta(location.pathname)
  }, [location.pathname])

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<Books />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  )
}