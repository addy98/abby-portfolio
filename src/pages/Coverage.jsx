import React from 'react'
import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import coverage from '../data/coverage.json';

class Coverage extends React.Component {
  
  render() {
    return (
      <div className="project-page">
        <ProjectHero page={coverage} darkMode={this.props.darkMode}/>
        <ProjectContent page={coverage} darkMode={this.props.darkMode}/>
      </div>
    )
  }

}

export default Coverage;