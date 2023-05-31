import React from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaSearch, FaUsers, FaHandsHelping, FaArrowCircleLeft, FaHatCowboy } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import "./menu.scss";

const Menu = () => {
  return (
      <section className='menu' aria-label="main navigation">
        <div className='container'>
          <Link to="/">
          <img className='Logo' src='./movieBlick.png' alt='logo'/>{/*style={{width:'150px', height:'150px'}} */}
          </Link>
        </div>
        <div className='link'>Menu</div>
        <div className='menulist'>
            <div className='link'><FaHome/><Link to="/" exact='true'>Home</Link></div>
            <div className='link'><FaHatCowboy/><Link to="discovery">Discovery</Link></div>
            <div className='link'><FaUsers/><Link to="community">Community</Link></div>
            <div className='link'><FaSearch/><Link to="search">Search</Link></div>
            <div className='divider' style={{border:'1px solid #333'}}></div>
            <div className='link'><AiFillSetting/><Link to="setting">Setting</Link></div>
            <div className='link'><FaHandsHelping/><Link to="help">Help</Link></div>
            <div className='link'><FaArrowCircleLeft/><Link to="exit">Exit</Link></div>
        </div>
        {/*<div>creators</div>*/}
      </section>
  )
}

export default Menu