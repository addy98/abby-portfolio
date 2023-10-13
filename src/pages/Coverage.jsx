import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import coverage from '../data/coverage.json';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Coverage() {
  const darkMode = useContext(ThemeContext)
  return (
    <div className="project-page">
      <ProjectHero page={coverage} darkMode={darkMode}/>
      <ProjectContent page={coverage} darkMode={darkMode}/>
    </div>
  )
}