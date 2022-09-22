import Navigation from './components/Navigation'
import Home from './pages/Home'
import Footer from './components/Footer'
import MMS from './pages/MMS'
import Coverage from './pages/Coverage'
import Bankrate from './pages/Bankrate'
import WSJ from './pages/WSJ'
import CNET from './pages/CNET'
import { Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="App">
      <Navigation />
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
    </div>
  );
}

export default App;
