import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'

class Navigation extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            darkMode: true
        }
    }
    
    toggleDarkMode() {
        let textThemeToggle = document.getElementsByName('text-theme-toggle')
        let bgThemeToggle = document.getElementsByName('bg-theme-toggle')
        let themeToggleButton = document.getElementById('theme-toggle-button')
        let linkedinLogo = document.getElementById('linkedin-logo')
        if (this.state.darkMode === true) {
            this.setState({darkMode: false})
            themeToggleButton.classList.toggle('dark-mode-off')
            linkedinLogo.classList.toggle('linkedin-logo-inverted')
            for (let i=0; i<textThemeToggle.length; i++) {
                textThemeToggle[i].classList.toggle('text-black')
                textThemeToggle[i].classList.toggle('text-white')
            }
            for (let i=0; i<bgThemeToggle.length; i++) {
                bgThemeToggle[i].classList.toggle('bg-white')
                bgThemeToggle[i].classList.toggle('bg-black')
            }
            
        } else {
            this.setState({darkMode: true})
            themeToggleButton.classList.toggle('dark-mode-off')
            linkedinLogo.classList.toggle('linkedin-logo-inverted')
            for (let i=0; i<textThemeToggle.length; i++) {
                textThemeToggle[i].classList.toggle('text-black')
                textThemeToggle[i].classList.toggle('text-white')
            }
            for (let i=0; i<bgThemeToggle.length; i++) {
                bgThemeToggle[i].classList.toggle('bg-white')
                bgThemeToggle[i].classList.toggle('bg-black')
            }
        }
    }
    
    render() {
        return (
            <Navbar name='bg-theme-toggle' id='navbar' className='bg-black'>
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
                            <div id='theme-toggle-button' className='dark-mode' onClick={() => this.toggleDarkMode()}></div>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Navigation