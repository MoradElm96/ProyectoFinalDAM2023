import React from 'react'
import Footer from './Footer'

import Navigation from "./Navigation";
import "../../css/children.css";

function Layout({children}) {
  return (
    <>
    <Navigation/>
    <main className='main-children' >{children}</main>
    <Footer/>
    </>
  )
}

export default Layout;