import React from 'react'
import '../../CSS/navbar.css'
import insta from '../../images/instagram.png'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <h1>logo</h1>
        </div>
        <div className="mid-nav">
            <a href=""><h2>home</h2></a>
            <a href=""><h2>home</h2></a>
            <a href=""><h2>home</h2></a>
            <a href=""><h2>home</h2></a>
            {/* <h2>home</h2>
            <h2>home</h2>
            <h2>home</h2> */}
        </div>
        <div className="end-nav">
        <h2></h2><br />
            <a href=""><img src={insta} alt="" /></a>
            <a href=""><img src={insta} alt="" /></a>
            <a href=""><img src={insta} alt="" /></a>
            <button><b>hello</b></button>
        </div>
    </div>
  )
}

export default Navbar