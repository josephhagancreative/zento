import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Navbar />
      </header>

      <div className="page-content">{children}</div>

      <Footer />
    </div>
  )
}
