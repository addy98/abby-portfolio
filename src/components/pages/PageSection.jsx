import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import InlineNumber from "../widgets/InlineNumber";
import Takeaways from "../widgets/Takeaways";

class PageSection extends React.Component {
    render() {
        const section = this.props.section
        const darkMode = this.props.darkMode
        return (
            <div className="page-section my-20">
                <Container fluid className="pl-0">
                    <Row className="flex">
                        <Col sm='2'>
                            <div className="red-line"></div>
                        </Col>
                        <Col sm='7'>
                            <div className="flex">
                                {section.number !== undefined && 
                                    <InlineNumber number={section.number} />
                                }
                                <h3 className="mb-32">{section.title}</h3>
                            </div>
                            <div className="inter-large-bold mb-12">{section.subtitle}</div>
                            <div className="inter-paragraph">{section.text}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{span: 9, offset: 2}}>
                            {this.props.page !== undefined && this.props.page.takeaways !== undefined && 
                                <Takeaways darkMode={darkMode} page={this.props.page} />
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PageSection