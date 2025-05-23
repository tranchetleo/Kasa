import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../page/Home.tsx'
import About from '../page/About.tsx'
import Location from '../page/Location.tsx'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
