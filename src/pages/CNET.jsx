import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import cnet from '../data/cnet.json';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function CNET() {
  const darkMode = useContext(ThemeContext)
  return (
    <div className="project-page">
      <ProjectHero page={cnet} darkMode={darkMode}/>
      <ProjectContent page={cnet} darkMode={darkMode}/>
    </div>
  )
}