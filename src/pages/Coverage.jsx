import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import coverage from '../data/coverage.json';

export default function Coverage(props) {
  return (
    <div className="project-page">
      <ProjectHero page={coverage} darkMode={props.darkMode}/>
      <ProjectContent page={coverage} darkMode={props.darkMode}/>
    </div>
  )
}