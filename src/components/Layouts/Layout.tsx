interface LayoutProp {
    children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProp) => {
    
    return(
        <div className='mainLayout' id='mainLayout'>
            { children }
        </div>
    )
}

export default Layout