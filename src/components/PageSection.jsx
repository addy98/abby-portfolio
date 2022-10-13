import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class PageSection extends React.Component {
    render() {
        const section = this.props.section
        return (
            <div className="page-section my-20">
                <Container fluid className="m-0">
                    <Row className="mb-32 flex flex-align-center">
                        <Col sm='2'>
                            <div className="red-line"></div>
                        </Col>
                        <Col sm='10'>
                            <h3>{section.title}</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PageSection