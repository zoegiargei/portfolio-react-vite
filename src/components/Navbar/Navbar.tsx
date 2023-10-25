import Icon from '../Icon/Icon.jsx'
import { Link } from 'react-router-dom'

interface NavbarProps {
    links: Array<string>
}

const Navbar = (props: NavbarProps) => {
    return(
        <nav className='navbarContainer'>
            <ul className='navbarContainer__icon'>
                <li className='icon__container'>
                    <Link to={'/'} className='link'>
                        <Icon icon='Z' />
                    </Link>
                </li>
            </ul>
            
            <ul className='navbarContainer__links'>
                {
                    props.links.map((link, index) => {
                        const qtyLinks = props.links.length - 1
                        let linkClass = 'link'

                        if (index === qtyLinks) {
                            linkClass = 'link lastLink'
                        }

                        return(
                            <li className='navLink'><Link to={`/${ link }`.toString()} className={linkClass}> { link } </Link></li>
                        )

                    }
                    )
                }
            </ul>
        </nav>
    )
}
export default Navbar