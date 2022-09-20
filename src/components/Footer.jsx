import { Row, Col, Container } from 'react-bootstrap'

function Footer() {
    return (
        <div className='footer'>
            <footer name='bg-theme-toggle' className='bg-black py-44-48'>
                <Container>
                    <Row>
                        <Col sm={{span: 10, offset: 1}}>
                            <div className='flex flex-justify-between'>
                                <div className='h5 text-red'>Abby Moulton</div>
                                <a href='https://www.linkedin.com/in/abby-moulton/' target='_blank' rel="noreferrer" >
                                    <div className='flex'>
                                        <div name='text-theme-toggle' className='inter-paragraph text-white'>Let's connect </div>
                                        <div id='linkedin-logo' className='linkedin-logo'></div>
                                    </div>
                                </a>
                            </div>
                            <div className='flex flex-justify-between'>
                                <div name='text-theme-toggle' className='inter-small text-white'>Copyright 2022 – All Rights Reserved.</div>
                                <div name='text-theme-toggle' className='inter-small text-white'>Built by <a className='addison' target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/addison-west/">Addison West</a></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer