import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import bankrate from '../data/bankrate.json';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

export default function Bankrate() {
  const darkMode = useContext(ThemeContext)
  return (
    <div className="project-page">
      <ProjectHero page={bankrate} darkMode={darkMode}/>
      <ProjectContent page={bankrate} darkMode={darkMode}/>
    </div>
  )
}