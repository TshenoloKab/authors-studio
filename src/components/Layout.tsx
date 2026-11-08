import type { ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import './Layout.css'

export default function Layout({ children }: { children?: ReactNode }) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        {children ?? <Outlet />}
      </main>
      <Footer />
    </div>
  )
}