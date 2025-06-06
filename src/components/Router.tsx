import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header.tsx'
import Footer from '../components/Footer.tsx'
import Home from '../page/Home.tsx'
import About from '../page/About.tsx'
import Location from '../page/Location.tsx'

function Router() {
  return (
    <BrowserRouter basename="/Kasa">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
