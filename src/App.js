import Navigation from './components/Navigation'
import Home from './components/Home'
import Footer from './components/Footer'
import ProjectHero from './components/ProjectHero'
import projects from './data/pages.json'

function App() {
  const pages = projects
  return (
    <div className="App">
      <Navigation />
      <Home />
      <ProjectHero page={pages[0]} />
      <Footer />
    </div>
  );
}

export default App;
