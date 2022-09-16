import Navigation from './components/Navigation'
import Home from './pages/Home'
import Footer from './components/Footer'
// import ProjectHero from './components/ProjectHero';
// import projects from './data/pages.json'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      {/* <ProjectHero page={projects[2]}/> */}
      <Footer />
    </div>
  );
}

export default App;
