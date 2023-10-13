import { Container, Navbar, Nav } from 'react-bootstrap'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

export default function Navigation({ onClick }) {
    const darkMode = useContext(ThemeContext)
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
                            <div className={darkMode ? 'dark-mode' : 'dark-mode-off'} onClick={() => onClick()}></div>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}