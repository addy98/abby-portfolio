import { Row, Col, Container } from 'react-bootstrap'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

export default function Footer() {
    const darkMode = useContext(ThemeContext)
    return (
        <div className='footer'>
            <footer className={'py-44-48 ' + (darkMode ? 'bg-black' : 'bg-off-white')}>
                <Container>
                    <Row>
                        <Col sm={{span: 10, offset: 1}}>
                            <div className='flex flex-justify-between'>
                                <div className='h5 text-red'>Abby Moulton</div>
                                <a href='https://www.linkedin.com/in/abby-moulton/' target='_blank' rel="noreferrer" >
                                    <div className='flex'>
                                        <div className={'inter-paragraph ' + (darkMode ? 'text-white' : 'text-black')}>Let's connect </div>
                                        <div id='linkedin-logo' className={darkMode ? 'linkedin-logo' : 'linkedin-logo-inverted'}></div>
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