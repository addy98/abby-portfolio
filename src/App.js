<<<<<<< HEAD
import React, { createContext, useState } from 'react';
=======
import { useState } from 'react';
>>>>>>> 0d22b1de1e57beb7034549f1699e4d6f8264e0e4
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

<<<<<<< HEAD
export const ThemeContext = createContext(null)

function App() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className={"App "+ (darkMode ? 'bg-black' : 'bg-white')}>
        <Navigation onClick={() => setDarkMode(!darkMode)}/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode}/>} />
          {/* <Route path="mms" element={<MMS darkMode={this.state.darkMode}/>} />
          <Route path="coverage" element={<Coverage darkMode={this.state.darkMode}/>} />
          <Route path="bankrate" element={<Bankrate darkMode={this.state.darkMode}/>} />
          <Route path="wsj" element={<WSJ darkMode={this.state.darkMode}/>} />
          <Route path="cnet" element={<CNET darkMode={this.state.darkMode}/>} /> */}
        </Routes>
        <Footer darkMode={darkMode}/>
      </div>
    </ThemeContext.Provider>
    
  )
}
// class App extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             darkMode: true,
//             home: true
//         }
//     }

//     toggleDarkMode() {
//         if (this.state.darkMode === true) {
//             this.setState({darkMode: false})
//         } else {
//             this.setState({darkMode: true})
//         }
//     }

//     render() {
//       return (
//         <div className={"App "+ (this.state.darkMode ? 'bg-black' : 'bg-white')}>
//           <Navigation darkMode={this.state.darkMode} onClick={() => this.toggleDarkMode()}/>
//           <ScrollToTop />
//           <Routes>
//             <Route path="/" element={<Home darkMode={this.state.darkMode}/>} />
//             <Route path="mms" element={<MMS darkMode={this.state.darkMode}/>} />
//             <Route path="coverage" element={<Coverage darkMode={this.state.darkMode}/>} />
//             <Route path="bankrate" element={<Bankrate darkMode={this.state.darkMode}/>} />
//             <Route path="wsj" element={<WSJ darkMode={this.state.darkMode}/>} />
//             <Route path="cnet" element={<CNET darkMode={this.state.darkMode}/>} />
//           </Routes>
//           <Footer darkMode={this.state.darkMode}/>
//         </div>
//       )
//     }

// }

export default App;
=======
export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div className={"App "+ (darkMode ? 'bg-black' : 'bg-white')}>
      <ThemeContext.Provider value={darkMode}>
        <Navigation onClick={() => setDarkMode(!darkMode)}/>
        <ScrollToTop />
        <ThemeContext.Provider value={darkMode}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="mms" element={<MMS />} />
            <Route path="coverage" element={<Coverage />} />
            <Route path="bankrate" element={<Bankrate />} />
            <Route path="wsj" element={<WSJ />} />
            <Route path="cnet" element={<CNET />} />
          </Routes>
        </ThemeContext.Provider>
        <Footer />
      </ThemeContext.Provider>
    </div>
  )
}
>>>>>>> 0d22b1de1e57beb7034549f1699e4d6f8264e0e4
