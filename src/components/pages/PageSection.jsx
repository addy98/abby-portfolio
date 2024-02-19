import { Container, Row, Col } from "react-bootstrap";
import InlineNumber from "../widgets/InlineNumber";
import Takeaways from "../widgets/Takeaways";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext";

export default function PageSection({ section, page }) {
    const darkMode = useContext(ThemeContext)
    return (
        <div className="page-section my-20">
            <ThemeContext.Provider value={darkMode}>
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
                            {page !== undefined && page.takeaways !== undefined && 
                                <Takeaways page={page} />
                            }
                        </Col>
                    </Row>
                </Container>
            </ThemeContext.Provider>
            
        </div>
    )
}