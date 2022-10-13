import React from 'react'
import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import bankrate from '../data/bankrate.json';

class Bankrate extends React.Component {

  render() {
    return (
      <div className="project-page">
        <ProjectHero page={bankrate} darkMode={this.props.darkMode}/>
        <ProjectContent page={bankrate}/>
      </div>
    )
  }

}

export default Bankrate;