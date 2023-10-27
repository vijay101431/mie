import React, { useState, useEffect }  from 'react';
import logo from "../../assets/image/logo.png"

function Index() {
  // Add and Remove Class on scroll
  const [scrolltopdata, setscrolltopdata] = useState('');

  useEffect(() => {
      window.addEventListener('scroll', () => {
          if (window.scrollY < 15) {
              setscrolltopdata('');
          } else {
              setscrolltopdata('header_active');
          }
      });
  },[])
  return (
    <>
    <div className='offers'></div>
      <header className={`header ${scrolltopdata}`}>
        <div className='header-menu'>
            <ul className='list d-flex'>
                 <li className='menulist-item'><a href='#'>Home</a> </li>
                 <li className='menulist-item'><a href='#'>Gifts</a> </li>
                 <li className='menulist-item'><a href='#'>Contact</a> </li>
            </ul>
        </div>
        <div className='header-logo'>
             <img src={logo} />
             <h1 className='header-logo-text'>Make It Easy Gifts</h1>
        </div>
        <div className='header-profile'>
           <ul className='profilemenu d-flex'>
                 <li className='profilemenu-item'><a href='#'>Account</a> </li>
                 <li className='profilemenu-item'><a href='#'>Wishlist</a> </li>
                 <li className='profilemenu-item'><a href='#'> Cart (1)</a> </li>
            </ul>
        </div>
      </header>
      </>
  )
}

export default Index