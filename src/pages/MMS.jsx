import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import mms from '../data/mms.json';

export default function MMS(props) {
  return (
    <div className="project-page">
      <ProjectHero page={mms} darkMode={props.darkMode}/>
      <ProjectContent page={mms} darkMode={props.darkMode}/>
    </div>
  )
}