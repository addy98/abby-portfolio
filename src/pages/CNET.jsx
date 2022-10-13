import React from 'react'
import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import cnet from '../data/cnet.json';

class CNET extends React.Component {

  render() {
    return (
      <div className="project-page">
        <ProjectHero page={cnet} darkMode={this.props.darkMode}/>
        <ProjectContent page={cnet}/>
      </div>
    )
  }

}

export default CNET;