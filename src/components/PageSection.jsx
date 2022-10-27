import React from "react";
import { Container, Row, Col } from "react-bootstrap";

class PageSection extends React.Component {
    render() {
        const section = this.props.section
        return (
            <div className="page-section my-20">
                <Container fluid className="pl-0">
                    <Row className="flex">
                        <Col sm='2'>
                            <div className="red-line"></div>
                        </Col>
                        <Col sm='7'>
                            <h3 className="mb-32">{section.title}</h3>
                            <div className="paragraph-large-bold mb-12">{section.subtitle}</div>
                            <div className="inter-paragraph">{section.text}</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PageSection