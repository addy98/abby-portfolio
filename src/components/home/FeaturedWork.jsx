import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../../ThemeContext'

export default function FeaturedWork() {
    const darkMode = useContext(ThemeContext)
    return(
        <div className='featured-work'>
            <Container>
                <div className='flex flex-justify-around feat-work-row-1'>
                    <Link to="/bankrate" className='override-link'>
                        <div className='hover-wrapper'>
                            <h4>BANKRATE TOOLING</h4>
                            <div className='feat-work-1'></div>
                        </div>
                    </Link>
                    <Link to="/cnet" className='override-link'>
                        <div className='hover-wrapper'>
                            <h4>CNET OPTIMIZATIONS</h4>
                            <div className={darkMode ? 'feat-work-2' : 'feat-work-2-inverted'}></div>
                        </div>
                    </Link>
                </div>
                <div className='flex flex-justify-around feat-work-row-2'>
                    <Link to="/mms" className='override-link'>
                        <div className='hover-wrapper'>
                            <h4>TRAVEL REBRAND</h4>
                            <div className='feat-work-3'></div>
                        </div>
                    </Link>
                    <Link to="" className='override-link'>
                        <div className='hover-wrapper'>
                            <div className={darkMode ? 'feat-work-4' : 'feat-work-4-inverted'}>
                                <div className={darkMode ? 'lock-logo' : 'lock-logo-inverted'}></div>
                                <h2>Hi-Fidelty comps pitching creative services to new partner with global reach</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </Container>
        </div>
    )
}