import React from 'react';
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

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            darkMode: true
        }
    }

    toggleDarkMode() {
        let textThemeToggle = document.getElementsByName('text-theme-toggle')
        let bgThemeToggle = document.getElementsByName('bg-theme-toggle')

        let themeToggleButton = document.getElementById('theme-toggle-button')
        let linkedinLogo = document.getElementById('linkedin-logo')

        if (this.state.darkMode === true) {
            this.setState({darkMode: false})
            themeToggleButton.classList.toggle('dark-mode-off')
            linkedinLogo.classList.toggle('linkedin-logo-inverted')
            for (let i=0; i<textThemeToggle.length; i++) {
                textThemeToggle[i].classList.toggle('text-black')
                textThemeToggle[i].classList.toggle('text-white')
            }
            for (let i=0; i<bgThemeToggle.length; i++) {
                bgThemeToggle[i].classList.toggle('bg-white')
                bgThemeToggle[i].classList.toggle('bg-black')
            }
        } else {
            this.setState({darkMode: true})
            themeToggleButton.classList.toggle('dark-mode-off')
            linkedinLogo.classList.toggle('linkedin-logo-inverted')
            for (let i=0; i<textThemeToggle.length; i++) {
                textThemeToggle[i].classList.toggle('text-black')
                textThemeToggle[i].classList.toggle('text-white')
            }
            for (let i=0; i<bgThemeToggle.length; i++) {
                bgThemeToggle[i].classList.toggle('bg-white')
                bgThemeToggle[i].classList.toggle('bg-black')
            }
        }
    }

    render() {
      return (
        <div className="App">
          <Navigation onClick={() => this.toggleDarkMode()}/>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home darkMode={this.state.darkMode}/>} />
            <Route path="mms" element={<MMS darkMode={this.state.darkMode}/>} />
            <Route path="coverage" element={<Coverage darkMode={this.state.darkMode}/>} />
            <Route path="bankrate" element={<Bankrate darkMode={this.state.darkMode}/>} />
            <Route path="wsj" element={<WSJ darkMode={this.state.darkMode}/>} />
            <Route path="cnet" element={<CNET darkMode={this.state.darkMode}/>} />
          </Routes>
          <Footer />
        </div>
      )
    }

}

export default App;
