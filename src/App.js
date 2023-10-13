import { useState } from 'react';
import Navigation from './components/app/Navigation'
import Home from './pages/Home'
import Footer from './components/app/Footer'
import MMS from './pages/MMS'
import Coverage from './pages/Coverage'
import Bankrate from './pages/Bankrate'
import WSJ from './pages/WSJ'
import CNET from './pages/CNET'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/app/ScrollToTop'
import { ThemeContext } from './ThemeContext';

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={"App "+ (darkMode ? 'bg-black' : 'bg-white')}>
      <ThemeContext.Provider value={darkMode}>
        <Navigation onClick={() => setDarkMode(!darkMode)}/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mms" element={<MMS />} />
          <Route path="coverage" element={<Coverage />} />
          <Route path="bankrate" element={<Bankrate />} />
          <Route path="wsj" element={<WSJ />} />
          <Route path="cnet" element={<CNET />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </div>
  )
}
