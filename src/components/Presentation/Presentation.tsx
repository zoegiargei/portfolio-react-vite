import Layout from '../Layouts/Layout.js'
import Button from '../Button/Button.js'

interface Props {
    contTitlePresentation: string
    classTxt1: string
    titleText1: string
    classTxt2: string
    titleText2: string
    buttonClass: string
    classTxtBotton: string
    txtBotton: string
    btnPath: string
    renderBtnContent: () => JSX.Element
}

const Home: React.FC<Props> = (props) => {
    return (
        <>
            <Layout>
                <div className='presentationContainer animate__animated animate__fadeIn animate__slower'>
                    <div className='presentationContainer__presentation'>
                        <div className={props.contTitlePresentation}>
                            <h1 className={props.classTxt1}> {props.titleText1} </h1>
                            <h1 className={props.classTxt2}> {props.titleText2} </h1>
                        </div>

                        <Button buttonClass={props.buttonClass} renderBtnContent={props.renderBtnContent()} btnPath={props.btnPath} />
                    </div>

                    <h2 className={props.classTxtBotton} >{props.txtBotton}</h2>
                </div>
            </Layout>
        </>
    )
}
export default Home