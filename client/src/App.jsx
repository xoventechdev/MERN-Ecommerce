import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './Page/HomePage'
import BrandPage from './Page/BrandPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/brand" element={<BrandPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
