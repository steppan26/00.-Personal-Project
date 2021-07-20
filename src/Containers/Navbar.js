import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import './Navbar.css'
import NavButton from '../Components/NavButton'
import LOGO from '../Images/logo.png'

const Navbar = () =>  {
    const [props, onClick] = useState(true)
    const navStyle = useSpring({
        width: props ? "100vw" : "10vw",
        height: props ? "10vh" : "100vh",
        flexDirection: props ? "row" : "column",
        alignItems: props ? "flex-end" : "center",
        justifyContent: props ? "flex-end" : "flex-end",
        config: {duration: 300},
    })

    const navBtnStyle = useSpring({
        height: props ? "100%" : "50vh",
        width: props ? "30vw" : "100%",
        flexDirection: props ? "row" : "column",
    })


    return(
        <animated.div className="navWrapper" style={navStyle}>
            <div className="navLogo">
                <img src={LOGO} alt="logo" onClick={() => onClick(a => !a)}/>
            </div>
            <animated.div className="navBtnsWrapper" style={navBtnStyle}>
                <NavButton title="Page 1" />
                <NavButton title="Page 2" />
                <NavButton title="Page 3" />
            </animated.div>
        </animated.div>
    );
}

export default Navbar;

//{() => onClick(a => !a)}