import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import cnet from '../data/cnet.json';

export default function CNET(props) {
  return (
    <div className="project-page">
      <ProjectHero page={cnet} darkMode={props.darkMode}/>
      <ProjectContent page={cnet} darkMode={props.darkMode}/>
    </div>
  )
}