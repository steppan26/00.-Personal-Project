import React, { useState } from 'react'
import './NavButton.css'
import { useSpring, animated } from 'react-spring'

const NavButton = ({title}) => {
    const [contentStatus, displayContent] = useState(false)
    const btnMouseOver = useSpring({
        background: contentStatus ? "linear-gradient(rgba(18, 31, 107, 0.753), rgba(18, 31, 107, 0.753))" : "linear-gradient( rgba(18,31,107,0), rgba(18, 31, 107, 0.753))",
        height: contentStatus ? "60%" : "40%",
        config: {duration: 300},
    })

    return (
        <animated.div className="navBtn" style={btnMouseOver} onMouseOver={()=> displayContent(a => !a)} onMouseLeave={()=> displayContent(a => !a)}>{title}</animated.div>)
}

export default NavButton