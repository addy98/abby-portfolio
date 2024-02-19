import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ArrowLogo from '../../components/widgets/ArrowLogo'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

export default function Hero() {
    const darkMode = useContext(ThemeContext)
    return(
        <div className='hero'>
            <div className='py-72-48'>
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
                            onAnimationEnd={retainProductLineWidth}></div>
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
                        onAnimationEnd={retainDesignerLineWidth}></div>
                    </Container>
                </div>
            </div>
            <Container>
                <h3 
                id='hero-subtitle'
                className={'hero-subtitle ' + (darkMode ? 'text-white' : 'text-black')}
                onAnimationEnd={retainOpacity}
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

function retainOpacity() {
    document.getElementById('hero-subtitle').style.opacity = 1;
}

function retainProductLineWidth() {
    document.getElementById('hero-product-red').style.width = "20%";
}

function retainDesignerLineWidth() {
    document.getElementById('hero-designer-red').style.width = "20%";
}