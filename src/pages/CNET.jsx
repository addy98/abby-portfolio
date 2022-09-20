import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import projects from '../data/pages.json';

function CNET() {
  const cnet = 4;
  return (
    <div className="project-page">
      <ProjectHero page={projects[cnet]}/>
      <ProjectContent page={projects[cnet]}/>
    </div>
  );
}

export default CNET;