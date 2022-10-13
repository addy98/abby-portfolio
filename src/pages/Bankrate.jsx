import React from 'react'
import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import projects from '../data/pages.json';

class Bankrate extends React.Component {

  render() {
    const bankrate = 2;
    return (
      <div className="project-page">
        <ProjectHero page={projects[bankrate]} darkMode={this.props.darkMode}/>
        <ProjectContent page={projects[bankrate]}/>
      </div>
    )
  }

}

export default Bankrate;