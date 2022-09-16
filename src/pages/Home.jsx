import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import projects from '../data/pages.json'
import ArrowLogo from '../components/ArrowLogo'

class Home extends React.Component {

    state = {
        page: 'home'
    }

    loadPage(page) {
        const pages = projects
        this.setState({page: pages[page]['page']})
    }

    retainOpacity() {
        document.getElementById('hero-subtitle').style.opacity = 1;
    }

    retainProductLineWidth() {
        document.getElementById('hero-product-red').style.width = "20%";
    }

    retainDesignerLineWidth() {
        document.getElementById('hero-designer-red').style.width = "20%";
    }

    render() {
        return (
            <div className='home'>
                <div name='bg-theme-toggle' className='bg-black'>
                    <div className='py-72-48'>
                        <div className='flex flex-align-center'>
                            <Container className='hero-text-position'>
                                <Row className='hero-title-top'>
                                    <div className='flex mb-32'>
                                        <div className='p'></div>
                                        <div className='r'></div>
                                        <div className='o'></div>
                                        <div className='d'></div>
                                        <div className='u'></div>
                                        <div className='c'></div>
                                        <div className='t'></div>
                                    </div>
                                </Row>
                            </Container>
                            <Container fluid className='hero-line-position'>
                                <div className='flex flex-justify-end'>
                                    <div id='hero-product-red' 
                                    className='hero-product-red'
                                    onAnimationEnd={this.retainProductLineWidth}></div>
                                </div>
                            </Container>
                        </div>
                        <div className='flex flex-align-center'>
                            <Container className='hero-text-position'>
                                <Row className='hero-title-bottom'>
                                    <div className='flex flex-justify-end mb-32'>
                                        <div className='d'></div>
                                        <div className='e'></div>
                                        <div className='s'></div>
                                        <div className='i'></div>
                                        <div className='g'></div>
                                        <div className='n'></div>
                                        <div className='e'></div>
                                        <div className='r'></div>
                                    </div>
                                </Row>
                            </Container>
                            <Container fluid className='hero-line-position'>
                                <div id='hero-designer-red' 
                                className='hero-designer-red' 
                                onAnimationEnd={this.retainDesignerLineWidth}></div>
                            </Container>
                        </div>
                    </div>
                    <Container>
                        <h3 
                        id='hero-subtitle'
                        name='text-theme-toggle' 
                        className='text-white hero-subtitle'
                        onAnimationEnd={this.retainOpacity}
                        >
                            Transforming the tools people use everyday, for the better.
                        </h3>
                        <div className='flex flex-justify-center home-first-arrow'>
                            <ArrowLogo />
                        </div>
                        <Row name='text-theme-toggle' className='text-white'>
                            <Col sm={{span: 6, offset: 1}}>
                                <h2>Hi, I'm Abby</h2>
                                <p className='inter-paragraph mt-32'>
                                    A product designer experienced in building and optimizing finacial tools 
                                    to help people make more informed decisions with their money. 
                                    I’m passionate about simplifying digital products to create more human-focused UI. 
                                </p>
                                <p className='inter-paragraph mt-32'>
                                    More on my work below–but first, here’s a little about me.
                                </p>
                                <ul className='inter-paragraph mt-32'>
                                    <div className='flex'>
                                        <div className='star-li'></div>
                                        <li>I was born and raised in North Carolina–<span className='heels'>go heels!</span></li>
                                    </div>
                                    <div className='flex mt-28'>
                                        <div className='star-li'></div>
                                        <li>My second passion is architecture and infrastructure design.</li>
                                    </div>
                                    <div className='flex mt-28'>
                                        <div className='star-li'></div>
                                        <li>One more interesting thing about me</li>
                                    </div>
                                </ul>
                            </Col>
                            <Col sm='4'>
                                <div className='h4 flex flex-justify-center flex-align-center'>
                                    <div id='rotation'></div>
                                    <div className='rotation-text'>BASED IN</div>
                                </div>
                            </Col>
                        </Row>
                        <div className='flex flex-justify-center home-second-arrow'>
                            <ArrowLogo />
                        </div>
                        <Row name='text-theme-toggle' className='text-white'>
                            <Col sm={{offset: 1}}>
                                <h2>Featured work</h2>
                            </Col>
                        </Row>
                        <Row className='mt-32'>
                            <Col sm={{offset: 1}}>
                                <Button onClick={() => this.loadPage(0)}>mms</Button>
                            </Col>
                            <Col>
                                <Button onClick={() => this.loadPage(1)}>coverage</Button>
                            </Col>
                            <Col>
                                <Button onClick={() => this.loadPage(2)}>bankrate</Button>
                            </Col>
                            <Col>
                                <Button onClick={() => this.loadPage(3)}>wsj</Button>
                            </Col>
                            <Col>
                                <Button onClick={() => this.loadPage(4)}>cnet</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home