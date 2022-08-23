import { Container, Navbar, NavLink } from 'react-bootstrap'
import '../assets/styles/main.scss'
import '../assets/styles/components/Nav.scss'

function Nav() {
    return (
        <Navbar className='bg-black'>
            <Container className='flex flex-justify-start'>
                <NavLink href="" className='h4 text-red'>Abby Moulton</NavLink>
                <NavLink href="" className='h4 text-white'>Work</NavLink>
                <NavLink href="" className='h4 text-white'>About</NavLink>
                <NavLink href="" className='h4 text-white'>Resume</NavLink>
            </Container>
        </Navbar>
    );
}

export default Nav