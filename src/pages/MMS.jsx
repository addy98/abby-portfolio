import React from 'react'
import ProjectHero from '../components/ProjectHero';
import ProjectContent from '../components/ProjectContent';
import mms from '../data/mms.json';

class MMS extends React.Component {

  render() {
    return (
      <div className="project-page">
        <ProjectHero page={mms} darkMode={this.props.darkMode}/>
        <ProjectContent page={mms}/>
      </div>
    )
  }

}

export default MMS;