import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component {
    
    render() {
        return (
            <div className='navigation'>
                <Navbar name='bg-theme-toggle' id='navbar' className='bg-black bar'>
                    <Container>
                        <Nav className="me-auto">
                            <Nav.Link href="" className='h5 text-red brand'>Abby Moulton</Nav.Link>
                            <Nav.Link name='text-theme-toggle' href="" className='h5 navigation-link text-white'>Work</Nav.Link>
                            <Nav.Link name='text-theme-toggle' href="" className='h5 navigation-link text-white'>About</Nav.Link>
                            <Nav.Link name='text-theme-toggle' href="" className='h5 navigation-link text-white'>Resume</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Item className='flex'>
                                <div name='text-theme-toggle' className='h5 text-white'>Dark mode</div>
                                <div id='theme-toggle-button' 
                                className='dark-mode' 
                                onClick={() => this.props.onClick()}></div>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Navigation