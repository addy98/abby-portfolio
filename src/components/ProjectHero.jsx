import '../assets/styles/main.scss'
import '../assets/styles/components/ProjectHero.scss'
import { Row, Col, Container } from 'react-bootstrap'

// NEED TO MAKE MODULAR

function ProjectHero() {
    return (
        <div name='bg-theme-toggle' className='bg-black project-hero'>
            <Container>
                <Row>
                    <Col sm={4} className='copy'>
                        <div class='flex text-red inter-paragraph'>
                            <div className='tags'>UI</div>
                            <div className='tags'>Branding</div>
                            <div className='tags'>Internship</div>
                        </div>
                        <div name='text-theme-toggle' className='text-white'>
                            <span className='h1'>Travel</span>
                            <span className='flex flex-justify-end'>
                                <div className='h2'>Rebrand</div>
                            </span>
                            <div className='inter-large mx-64-32'>
                                Full-scale rebrand of a Red Ventures aquired travel brand, Million Mile Secrets.
                            </div>
                            <div className='flex mb-54'>
                                <div className='mr-64'>
                                    <div className='inter-eyebrow'>Role</div>
                                    <div className='h4'>Intern</div>
                                </div>
                                <div>
                                    <div className='inter-eyebrow'>Timeframe</div>
                                    <div className='h4'>8 weeks</div>
                                </div>
                            </div>
                            <div className='arrow-logo'></div>
                        </div>
                    </Col>
                    <Col sm={{span: 7, offset: 1}} className='image'>
                        <div class='laptop-image'></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ProjectHero