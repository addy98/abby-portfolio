import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import mms from '../data/mms.json';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function MMS() {
  const darkMode = useContext(ThemeContext)
  return (
    <div className="project-page">
      <ProjectHero page={mms} darkMode={darkMode}/>
      <ProjectContent page={mms} darkMode={darkMode}/>
    </div>
  )
}