import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'

class Home extends React.Component {

    // state = {
    //     page: 'home'
    // }

    // loadPage(page) {
    //     this.setState({page: page})
    // }

    render() {
        return (
            <div name='bg-theme-toggle' className='bg-black'>
                <Container>
                    <Row>
                        <Col>
                            <Button onClick={() => this.loadPage('mms')}>mms</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => this.loadPage('coverage')}>coverage</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => this.loadPage('bankrate')}>bankrate</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => this.loadPage('wsj')}>wsj</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => this.loadPage('cnet')}>cnet</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Home