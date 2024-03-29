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

function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className={"App "+ (darkMode ? 'bg-black' : 'bg-white')}>
        <Navigation onClick={() => setDarkMode(!darkMode)}/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          <Route path="mms" element={<MMS darkMode={darkMode}/>} />
          <Route path="coverage" element={<Coverage darkMode={darkMode}/>} />
          <Route path="bankrate" element={<Bankrate darkMode={darkMode}/>} />
          <Route path="wsj" element={<WSJ darkMode={darkMode}/>} />
          <Route path="cnet" element={<CNET darkMode={darkMode}/>} />
        </Routes>
        <Footer darkMode={darkMode}/>
      </div>
    </ThemeContext.Provider>
    
  )
}

export default App;