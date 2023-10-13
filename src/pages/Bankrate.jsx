import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import bankrate from '../data/bankrate.json';

export default function Bankrate(props) {
  return (
    <div className="project-page">
      <ProjectHero page={bankrate} darkMode={props.darkMode}/>
      <ProjectContent page={bankrate} darkMode={props.darkMode}/>
    </div>
  )
}