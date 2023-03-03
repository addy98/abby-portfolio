import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component {
    
    render() {
        const darkMode = this.props.darkMode
        return (
            <div className='navigation'>
                <Navbar id='navbar' className={'bar ' + (darkMode ? 'bg-black' : 'bg-white')}>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="" className='h5 text-red brand'>Abby Moulton</Nav.Link>
                            <Nav.Link href="" className={'h5 navigation-link ' + (darkMode ? 'text-white' : 'text-black')}>Work</Nav.Link>
                            <Nav.Link href="" className={'h5 navigation-link ' + (darkMode ? 'text-white' : 'text-black')}>About</Nav.Link>
                            <Nav.Link href="" className={'h5 navigation-link ' + (darkMode ? 'text-white' : 'text-black')}>Resume</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Item className='flex'>
                                <div className={'h5 ' + (darkMode ? 'text-white' : 'text-black')}>Dark mode</div>
                                <div className={darkMode ? 'dark-mode' : 'dark-mode-off'} onClick={() => this.props.onClick()}></div>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Navigation