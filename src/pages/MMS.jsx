import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import projects from '../data/pages.json';

function MMS() {
  const mms = 0;
  return (
    <div className="project-page">
      <ProjectHero page={projects[mms]} darkMode={this.props.darkMode}/>
      <ProjectContent page={projects[mms]}/>
    </div>
  );
}

export default MMS;