import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import wsj from '../data/wsj.json';

export default function WSJ(props) {
  return (
    <div className="project-page">
      <ProjectHero page={wsj} darkMode={props.darkMode}/>
      <ProjectContent page={wsj} darkMode={props.darkMode}/>
    </div>
  )
}