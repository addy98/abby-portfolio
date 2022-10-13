import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import projects from '../data/pages.json';

function WSJ() {
  const wsj = 3;
  return (
    <div className="project-page">
      <ProjectHero page={projects[wsj]} darkMode={this.props.darkMode}/>
      <ProjectContent page={projects[wsj]}/>
    </div>
  );
}

export default WSJ;