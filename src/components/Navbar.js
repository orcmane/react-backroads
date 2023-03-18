import React from 'react'
import logo from '../images/logo.svg'
import {pageLinks} from '../data'

const Navbar = () => {
  return (
   <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
 
        <ul class="nav-links" id="nav-links">
          {pageLinks.map((link)=>{
            return(
          <li key={link.id}>
            <a href={link.href} class="nav-link"> {link.text}</a>
          </li>
            )
          })}
          

          
        </ul>

        <ul class="nav-icons">
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank" class="nav-icon">
              <i class="fab fa-squarespace"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar