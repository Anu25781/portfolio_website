import React, {useState} from 'react';

import styles from "./Navbar.module.css";
//import { getImageUrl } from "../utils";

import image1 from '../../public/images/menuIcon.png';

import image2 from '../../public/images/closeIcon.png';





const Navbar = () => {
const [menuOpen, setMenuOpen]=useState(false);


  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Portfolio</a>

      <div className={styles.menu}>
        <img className={styles.menubtn}  src={ menuOpen ? image2 : image1}alt="menu-button"  onClick={()=>setMenuOpen(!menuOpen)}/>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen} `} onClick={()=>setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#Projects">Projects</a>
          </li>

          

          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;

