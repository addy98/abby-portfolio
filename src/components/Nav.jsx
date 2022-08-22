import { Container, Navbar, NavLink } from 'react-bootstrap'
import '../assets/styles/main.scss'

function Nav() {
    return (
        <Navbar className='bg-black'>
            <Container>
                <NavLink href="" className='h4 text-red'>Abby Moulton</NavLink>
                <NavLink href="" className='h4 text-white'>Work</NavLink>
                <NavLink href="" className='h4 text-white'>About</NavLink>
                <NavLink href="" className='h4 text-white'>Resume</NavLink>
            </Container>
        </Navbar>
    );
}

export default Nav