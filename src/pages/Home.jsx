import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import ArrowLogo from '../components/ArrowLogo'
import { Link } from 'react-router-dom';

class Home extends React.Component {

    retainOpacity() {
        document.getElementById('hero-subtitle').style.opacity = 1;
    }

    retainProductLineWidth() {
        document.getElementById('hero-product-red').style.width = "20%";
    }

    retainDesignerLineWidth() {
        document.getElementById('hero-designer-red').style.width = "20%";
    }

    retainProductPosition() {
        document.getElementById('product-header-scroll-txt').style.transform = "translateY(0)";
    }

    retainDesignerPosition() {
        document.getElementById('designer-header-scroll-txt').style.transform = "translateY(0)";
    }

    render() {
        return (
            <div className='home'>
                <div name='bg-theme-toggle' className='bg-black'>
                    <div className='py-72-48'>
                        <div className='flex flex-align-center'>
                            <Container className='hero-text-position'>
                                <Row className='hero-animation-product mb-32'>
                                    <div className='wrap'>
                                        <div 
                                        className='flex' 
                                        id='product-header-scroll-txt'
                                        onAnimationEnd={this.retainProductPosition}>
                                            <span className='p'></span>
                                            <span className='r'></span>
                                            <span className='o'></span>
                                            <span className='d'></span>
                                            <span className='u'></span>
                                            <span className='c'></span>
                                            <span className='t'></span>
                                        </div>
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
                                <Row className='hero-animation-designer'>
                                    <div className='wrap'>
                                        <div className='flex flex-justify-end' 
                                        id='designer-header-scroll-txt' 
                                        onAnimationEnd={this.retainDesignerPosition}>
                                            <span className='d'></span>
                                            <span className='e'></span>
                                            <span className='s'></span>
                                            <span className='i'></span>
                                            <span className='g'></span>
                                            <span className='n'></span>
                                            <span className='e'></span>
                                            <span className='r'></span>
                                        </div>
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
                                <Link to="/mms"><Button>mms</Button></Link>
                            </Col>
                            <Col>
                                <Link to="/coverage"><Button>coverage</Button></Link>
                            </Col>
                            <Col>
                                <Link to="/bankrate"><Button>bankrate</Button></Link>
                            </Col>
                            <Col>
                                <Link to="/wsj"><Button>wsj</Button></Link>
                            </Col>
                            <Col>
                                <Link to="/cnet"><Button>cnet</Button></Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home