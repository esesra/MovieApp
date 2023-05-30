import React from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaUsers, FaHandsHelping, FaArrowCircleLeft, FaHatCowboy } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import "./sidebar.scss";

const Sidebar = () => {
  return (
      <section className='sidebar' aria-label="main navigation">
        <div>
          <Link>
          <img className='Logo' src='./action.png' alt='logo'/>{/*style={{width:'150px', height:'150px'}} */}
          </Link>
        </div>
        <div>Menu</div>
        <div className='menulist'>
            <div><FaHome/><Link to="/" exact='true'>Home</Link></div>
            <div><FaHatCowboy/><Link to="discovery">Discovery</Link></div>
            <div><FaUsers/><Link to="community">Community</Link></div>
            <div><FaSearch/><Link to="search">Search</Link></div>
            <div className='divider' style={{border:'1px dashed black'}}></div>
            <div><AiFillSetting/><Link to="setting">Setting</Link></div>
            <div><FaHandsHelping/><Link to="help">Help</Link></div>
            <div><FaArrowCircleLeft/><Link to="exit">Exit</Link></div>
        </div>
        <div>creators</div>
      </section>
  )
}

export default Sidebar