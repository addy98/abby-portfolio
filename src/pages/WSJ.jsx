import React from 'react'
import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import wsj from '../data/wsj.json';

class WSJ extends React.Component {
  
  render() {
    return (
      <div className="project-page">
        <ProjectHero page={wsj} darkMode={this.props.darkMode}/>
        <ProjectContent page={wsj}/>
      </div>
    )
  }

}

export default WSJ;