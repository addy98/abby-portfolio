import { Row, Col, Container } from 'react-bootstrap'
import ArrowLogo from '../widgets/ArrowLogo'

export default function ProjectHero(props) {
    const page = props.page
    const darkMode = props.darkMode
    return (
        <div className='project-hero'>
            <div className={'py-48-154 '+(darkMode ? 'bg-black' : 'bg-white')}>
                <Container>
                    <Row>
                        <Col sm={7} className='copy'>
                            <div className='flex text-red inter-paragraph'>
                                <div className='mr-24'>{page.tags[0]}</div>
                                <div className='mr-24'>{page.tags[1]}</div>
                                {page.tags[2] !== undefined &&
                                    <div className='mr-24'>{page.tags[2]}</div>
                                }
                            </div>
                            <div name='text-theme-toggle' className={darkMode ? 'text-white' : 'text-black'}>
                                <Row>
                                    <span className='h1'>{page['title-1']}</span>
                                </Row>
                                <Row>
                                    <Col sm={7}>
                                        <span className='flex flex-justify-center'>
                                            <div className='h2'>{page['title-2']}</div>
                                        </span>
                                        <div className='inter-large my-64-32'>
                                            {page['description']}
                                        </div>
                                        <div className='flex mb-54'>
                                            <div className='mr-64'>
                                                <div className='inter-eyebrow'>Role</div>
                                                <div className='h4'>{page['role']}</div>
                                            </div>
                                            <div>
                                                <div className='inter-eyebrow'>Timeframe</div>
                                                <div className='h4'>{page['timeframe']}</div>
                                            </div>
                                        </div>
                                    </Col>
                                    
                                </Row>
                                
                                <ArrowLogo />
                            </div>
                        </Col>
                        <Col sm={{span: 7, offset: 1}}>
                            <div className={page.page}></div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}