import React from 'react'
import Heading from './component/Heading'
import Icons from './component/Icons'
import Image from './component/Image'
import LoginForm from './component/LoginForm'
import Vision from './component/Vision'
import "./style/global.css"
const App = () => {
  return (
    <>
      <section id="mainContainer">
        <Image />
        <Vision />
        <Heading />
        <LoginForm />
        <Icons/>
      </section>
    </>
  );
}

export default App