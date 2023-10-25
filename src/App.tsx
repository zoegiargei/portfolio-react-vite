import { Route, Routes } from 'react-router-dom'
import { BsArrowRightShort } from 'react-icons/bs'
import Presentation from './components/Presentation/Presentation.js'
import PageA from './components/PageA/PageA.js'
import Navbar from './components/Navbar/Navbar.js'
import Layout from './components/Layouts/Layout.js';

const App = () => {

  return (
    <Layout>
      <Navbar links={ ['Who I Am ?', 'fullstack' ] }/>

      <Routes>
        <Route path='/' element={
          <Presentation 
              contTitlePresentation='titleContainer'
              titleText1="HI! I'M ZOE"
              classTxt1='mainTitle mainTitleOne'
              titleText2='WELCOME TO MY PORTFOLIO'
              classTxt2='mainTitle mainTitleTwo'
              renderBtnContent = {() => {
                return (
                  <>
                    <span className='button__span mainBtnPresentation__spanMainTitle'>
                      Know about me
                    </span>
                    <span className='mainBtnPresentation__spanMainTitle mainBtnPresentation__arrowIcon'>
                      <BsArrowRightShort className='arrowIcon' />
                    </span>
                  </>
                )
              }}

              btnPath='/fullstack'
              buttonClass='button mainBtnPresentation'
              txtBotton='Click button'
              classTxtBotton='txtBotton'
          />
        }/>

        <Route path='/fullstack' 
          element={ 
            <PageA 
              open='<>'
              titleA="Hi!,"
              titleB="I'm Zoe"
              titleC="Full stack"
              titleD="Developer."
              close='</>'
              buttonClass='button'
              /> 
            } 
        />

      </Routes>
    </Layout>
  )
}

export default App
