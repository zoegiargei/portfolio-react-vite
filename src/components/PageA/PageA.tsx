import Layout from '../Layouts/Layout.js'
import Letter from '../Letter/Letter.js'
import { BsArrowRightShort } from 'react-icons/bs'

interface PageAProps {
    open: string
    titleA: string
    titleB: string
    titleC: string
    titleD: string
    close: string
    buttonClass: string
}

const PageA = (props: PageAProps) => {

    const btnContent = () => {
        return(
            <>
                <span className='mainBtnPresentation__spanMainTitle mainBtnPresentation__arrowIcon'>
                    <BsArrowRightShort className='arrowIcon' />
                </span>
            </>
        )
    }

    return (
        <Layout>
            <div className='containerA'>
                <div className='containerTitles'>
                    <h1 className='fragments'>{props.open}</h1>
                    
                    <h1 className='containerTitles__titleA animate__animated animate__fadeIn animate__slower'>
                        {props.titleA}
                    </h1>
                    <h1 className='containerTitles__titleB animate__animated animate__fadeIn animate__slower'>
                        {props.titleB}
                    </h1>
                    <h1 className='containerTitles__titleC animate__animated animate__fadeIn animate__slower'>
                        {props.titleC}
                    </h1>
                    <h1 className='containerTitles__titleD animate__animated animate__fadeIn animate__slower'>
                        {props.titleD}
                    </h1>
                    <h1 className='fragments'>{props.close}</h1>    
                </div>
            </div>
            

            <Letter letter='z' />
        </Layout>
    )
}
export default PageA