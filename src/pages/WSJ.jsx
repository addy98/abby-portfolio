import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import wsj from '../data/wsj.json';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function WSJ() {
  const darkMode = useContext(ThemeContext)
  return (
    <div className="project-page">
      <ProjectHero page={wsj} darkMode={darkMode}/>
      <ProjectContent page={wsj} darkMode={darkMode}/>
    </div>
  )
}