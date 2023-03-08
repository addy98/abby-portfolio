import { Row, Col, Container } from 'react-bootstrap'
import React from 'react'
import ArrowLogo from '../widgets/ArrowLogo'

class ProjectHero extends React.Component {

    render() {
        const page = this.props.page
        const darkMode = this.props.darkMode
        return (
            <div className='project-hero'>
                <div name='bg-theme-toggle' className={'py-48-154 '+(darkMode ? 'bg-black' : 'bg-white')}>
                    <Container>
                        <Row>
                            <Col sm={4} className='copy'>
                                <div className='flex text-red inter-paragraph'>
                                    <div className='mr-24'>{page.tags[0]}</div>
                                    <div className='mr-24'>{page.tags[1]}</div>
                                    {page.tags[2] !== undefined &&
                                        <div className='mr-24'>{page.tags[2]}</div>
                                    }
                                </div>
                                <div name='text-theme-toggle' className={darkMode ? 'text-white' : 'text-black'}>
                                    <span className='h1'>{page['title-1']}</span>
                                    <span className='flex flex-justify-end'>
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
}

export default ProjectHero