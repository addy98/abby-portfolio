import React from "react";

class ProjectContent extends React.Component {
    render() {
        const page = this.props.page
        return (
            <h1>placeholder for {page.page} content</h1>
        );
    }
}

export default ProjectContent