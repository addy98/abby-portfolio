import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import projects from '../data/pages.json';

function Bankrate() {
  const bankrate = 2;
  return (
    <div className="project-page">
      <ProjectHero page={projects[bankrate]}/>
      <ProjectContent page={projects[bankrate]}/>
    </div>
  );
}

export default Bankrate;