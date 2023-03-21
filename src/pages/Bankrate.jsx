import React from 'react'
import ProjectHero from '../components/pages/ProjectHero';
import ProjectContent from '../components/pages/ProjectContent';
import bankrate from '../data/bankrate.json';

class Bankrate extends React.Component {

  render() {
    return (
      <div className="project-page">
        <ProjectHero page={bankrate} darkMode={this.props.darkMode}/>
        <ProjectContent page={bankrate} darkMode={this.props.darkMode}/>
      </div>
    )
  }

}

export default Bankrate;