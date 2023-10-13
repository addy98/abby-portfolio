import { Container, Row, Col } from 'react-bootstrap'
import Hero from '../components/home/Hero'
import FeaturedWork from '../components/home/FeaturedWork'
import Sprite from '../components/svg/svg-sprite'

export default function Home(props) {
    const darkMode = props.darkMode
    return (
        <div className='home'>
            <div className={darkMode ? 'bg-black text-white' : 'bg-white text-black'}>
                <Hero darkMode={darkMode} />
                <Container>
                    <Row>
                        <Col sm={{span: 6, offset: 1}}>
                            <Row>
                                <Col sm='auto'>
                                    <h2>Hi, I'm Abby</h2>
                                </Col>
                                <Col sm='2'>
                                    <div className='red-line'></div>
                                </Col>
                            </Row>
                            <p className='inter-paragraph mt-32'>
                                A product designer experienced in building and optimizing financial tools 
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
                                    <li>I love to run and plan to race in the NYC Marathon this year.</li>
                                </div>
                                <div className='flex mt-28'>
                                    <div className='star-li'></div>
                                    <li>My nerdy leisure pursuit is studying architecture and infrastructure.</li>
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
                    <Row>
                        <Col className='flex flex-justify-center'>
                            <div className='eyebrow-text px-115-50'>GREAT WORK WITH GREAT BRANDS</div>
                        </Col>
                    </Row>
                    <Sprite darkMode={darkMode}/>
                </Container>
                <Container fluid className="pl-0">
                    <Row className="px-140-48">
                        <Col sm='2'>
                            <div className="red-line"></div>
                        </Col>
                        <Col>
                            <h2>Featured work</h2>
                        </Col>
                    </Row>
                </Container>
                <FeaturedWork darkMode={darkMode}/>
            </div>
        </div>
    )
}