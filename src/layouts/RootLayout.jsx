import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import ScrollToTop from '../components/ScrollToTop.jsx'

export default function RootLayout() {
  const { pathname } = useLocation()

  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen selection:bg-primary-container selection:text-on-primary">
      <ScrollToTop />
      <Navbar />
      <main className="w-full pt-20 bg-surface">
        <div key={pathname} className="page-fade flex flex-col w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
