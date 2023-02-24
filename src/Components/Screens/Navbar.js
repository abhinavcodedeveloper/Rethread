import React from 'react'
import {Link} from 'react-router-dom'
import '../Components/Navbar.css'
const Navbar = () => {
  return (
    <div>
         <div className="navbar">
        <div className="logo">
            <img src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" id='imgLogo' alt=""/>
            <h2>REThread</h2>
        </div>
        <div className="labels">
            <div><Link to="/">Home</Link></div>
            <div> <Link to="/">About Us</Link></div>
            <div><Link to="/">Blogs</Link></div>
            <div><Link to="/">Collection</Link></div>
            <div><Link to="/">Contact</Link></div>
        </div>
        <div className="Donation">
            <p>☎️ +91 9435214899</p>
            <button>Explore</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar