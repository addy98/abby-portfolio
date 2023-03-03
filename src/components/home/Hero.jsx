import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ArrowLogo from '../../components/ArrowLogo'

class Hero extends React.Component {

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
        const darkMode = this.props.darkMode
        return(
            <div>
                <div className='hero py-72-48'>
                    <div className='flex flex-align-center'>
                        <Container className='hero-text-position'>
                            <Row className='hero-animation mb-32'>
                                <div className='wrap'>
                                    <div 
                                    className='flex' 
                                    id='product-header-scroll-txt'>
                                        <span className={darkMode ? 'p' : 'p-inverted'}></span>
                                        <span className={darkMode ? 'r' : 'r-inverted'}></span>
                                        <span className={darkMode ? 'o' : 'o-inverted'}></span>
                                        <span className={darkMode ? 'd' : 'd-inverted'}></span>
                                        <span className={darkMode ? 'u' : 'u-inverted'}></span>
                                        <span className={darkMode ? 'c' : 'c-inverted'}></span>
                                        <span className={darkMode ? 't' : 't-inverted'}></span>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                        <Container fluid className='hero-line-position p-0'>
                            <div className='flex flex-justify-end'>
                                <div id='hero-product-red' 
                                className='hero-product-red'
                                onAnimationEnd={this.retainProductLineWidth}></div>
                            </div>
                        </Container>
                    </div>
                    <div className='flex flex-align-center'>
                        <Container className='hero-text-position'>
                            <Row className='hero-animation'>
                                <div className='wrap'>
                                    <div className='flex flex-justify-end' 
                                    id='designer-header-scroll-txt'>
                                        <span className={darkMode ? 'd' : 'd-inverted'}></span>
                                        <span className={darkMode ? 'e' : 'e-inverted'}></span>
                                        <span className={darkMode ? 's' : 's-inverted'}></span>
                                        <span className={darkMode ? 'i' : 'i-inverted'}></span>
                                        <span className={darkMode ? 'g' : 'g-inverted'}></span>
                                        <span className={darkMode ? 'n' : 'n-inverted'}></span>
                                        <span className={darkMode ? 'e' : 'e-inverted'}></span>
                                        <span className={darkMode ? 'r' : 'r-inverted'}></span>
                                    </div>
                                </div>
                            </Row>
                        </Container>
                        <Container fluid className='hero-line-position p-0'>
                            <div id='hero-designer-red' 
                            className='hero-designer-red' 
                            onAnimationEnd={this.retainDesignerLineWidth}></div>
                        </Container>
                    </div>
                </div>
                <Container>
                    <h3 
                    id='hero-subtitle'
                    className={'hero-subtitle ' + (darkMode ? 'text-white' : 'text-black')}
                    onAnimationEnd={this.retainOpacity}
                    >
                        Transforming the tools people use everyday, for the better.
                    </h3>
                    <div className='flex flex-justify-center home-arrow-margin'>
                        <ArrowLogo />
                    </div>
                </Container>
            </div>
        )
    }
    
}

export default Hero