import React from 'react'
 import {ReactNavbar} from "overlay-navbar"
 import images from  "../images/IMG-20210304-WA0008.jpg"
//  import HomePage from './HomePage'

function Header() {
  return(
    <ReactNavbar
    logo={images}
    // logoWidth = "1000px"
    // logoHeight = "1500px"
        navColor1="white"
        navColor2="skyblue"
        navColor3="red" 
         navColor4="blue"
         nav2justifyContent="space-around"
          nav3justifyContent="space-around"
          nav1Transition = "0.1"
          link1Text = "HOME"
    link2Text = "ABOUT"
    link4Text = "ADMIN"
    link3Text = "CONTACT"
    link1Url = "/"
    link2Url = "/about"
    link3Url = "/contact"
    link4Url = "/account"
    link3Padding ="10px"
    link2Padding="10px"
    link1Color = "HSL(250,100%,10%)"
    link1ColorHover = "white"
    link1Size="1.5rem"
    burgerColor = "white"
    burgerColorHover="yellow"
    // profileIcon = {true}
    // ProfileIconElement="ADMIN"

    // profileIconUrl = "/Account"
    />
  )
}

export default Header