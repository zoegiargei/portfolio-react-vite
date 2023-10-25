import { Link } from 'react-router-dom'

interface ButtonProps {
    buttonClass: string
    renderBtnContent: JSX.Element
    btnPath: string
}

const Button = ({ buttonClass, renderBtnContent, btnPath }: ButtonProps) => {
    return (
        <Link to={btnPath} className='link'>
            <button className={buttonClass} >
                {renderBtnContent}
            </button>
        </Link>
    )
}
export default Button