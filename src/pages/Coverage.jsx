import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import projects from '../data/pages.json';

function Coverage() {
  const coverage = 1;
  return (
    <div className="project-page">
      <ProjectHero page={projects[coverage]}/>
      <ProjectContent page={projects[coverage]}/>
    </div>
  );
}

export default Coverage;