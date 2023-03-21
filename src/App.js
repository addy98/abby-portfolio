import React from 'react';
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

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            darkMode: true
        }
    }

    toggleDarkMode() {
        if (this.state.darkMode === true) {
            this.setState({darkMode: false})
        } else {
            this.setState({darkMode: true})
        }
    }

    render() {
      return (
        <div className={"App "+ (this.state.darkMode ? 'bg-black' : 'bg-white')}>
          <Navigation darkMode={this.state.darkMode} onClick={() => this.toggleDarkMode()}/>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home darkMode={this.state.darkMode}/>} />
            <Route path="mms" element={<MMS darkMode={this.state.darkMode}/>} />
            <Route path="coverage" element={<Coverage darkMode={this.state.darkMode}/>} />
            <Route path="bankrate" element={<Bankrate darkMode={this.state.darkMode}/>} />
            <Route path="wsj" element={<WSJ darkMode={this.state.darkMode}/>} />
            <Route path="cnet" element={<CNET darkMode={this.state.darkMode}/>} />
          </Routes>
          <Footer darkMode={this.state.darkMode}/>
        </div>
      )
    }

}

export default App;
