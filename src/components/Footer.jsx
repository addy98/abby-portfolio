import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'

class Footer extends React.Component {

    render() {
        const darkMode = this.props.darkMode
        return (
            <div className='footer'>
                <footer className={'py-44-48 ' + (darkMode ? 'bg-black' : 'bg-white')}>
                    <Container>
                        <Row>
                            <Col sm={{span: 10, offset: 1}}>
                                <div className='flex flex-justify-between'>
                                    <div className='h5 text-red'>Abby Moulton</div>
                                    <a href='https://www.linkedin.com/in/abby-moulton/' target='_blank' rel="noreferrer" >
                                        <div className='flex'>
                                            <div className={'inter-paragraph ' + (darkMode ? 'text-white' : 'text-black')}>Let's connect </div>
                                            <div id='linkedin-logo' className='linkedin-logo'></div>
                                        </div>
                                    </a>
                                </div>
                                <div className='flex flex-justify-between'>
                                    <div className={'inter-small ' + (darkMode ? 'text-white' : 'text-black')}>Copyright 2022 – All Rights Reserved.</div>
                                    <div className={'inter-small ' + (darkMode ? 'text-white' : 'text-black')}>Built by <a className='addison' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/addison-west/">Addison West</a></div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        )
    }
}

export default Footer