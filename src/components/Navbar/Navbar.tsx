import Icon from '../Icon/Icon.jsx'
import { Link } from 'react-router-dom'

interface NavbarProps {
    links: Array<string>
}

const Navbar = (props: NavbarProps) => {
    return(
        <nav className='navbarContainer'>
            <ul className='navbarContainer__icon'>
                <li>
                    <Link to={'/'} className='link'>
                        <Icon icon='Z' />
                    </Link>
                </li>
            </ul>
            
            <ul className='navbarContainer__links'>
                {
                    props.links.map((link) => {
                        const ModLink = '{ ' + link + ' }'
                        return(
                            <li className='navLink'><Link to={`/${ link }`.toString()} className='link'> { ModLink } </Link></li>
                        )
                    }
                    )
                }
            </ul>
        </nav>
    )
}
export default Navbar