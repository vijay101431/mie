import React, { useState, useEffect } from 'react';
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
  }, [])
  return (
    <>
      <div className='offers'></div>
      <header className={`header ${scrolltopdata}`}>
        <div className='header-menu'>
          <ul className='menulist d-flex'>
            <li className='menulist-item'><a href='#'>Home</a> </li>
            <li className='menulist-item'><a href='#'>Gifts</a> </li>
            <li className='menulist-item'><a href='#'>Contact</a> </li>
          </ul>
          <div className='mobileMenu'>
            <div className='mobileMenu-icon'>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25px" height="25px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M776 3977 c-109 -61 -106 -221 5 -277 38 -20 67 -20 1779 -20 1712 0 1741 0 1779 20 113 57 113 223 0 280 -38 20 -67 20 -1781 20 l-1743 0 -39 -23z" />
                  <path d="M776 2697 c-109 -61 -106 -221 5 -277 38 -20 67 -20 1779 -20 1712 0 1741 0 1779 20 113 57 113 223 0 280 -38 20 -67 20 -1781 20 l-1743 0 -39 -23z" />
                  <path d="M776 1417 c-109 -61 -106 -221 5 -277 38 -20 67 -20 1779 -20 1712 0 1741 0 1779 20 113 57 113 223 0 280 -38 20 -67 20 -1781 20 l-1743 0 -39 -23z" />
                </g>
              </svg>
            </div>
          </div>
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
          <ul className='profilemenu profilemenu-mobile'>
            {/* <li className='profilemenu-item'><a href='#'><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25px" height="25px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path d="M2200 4704 c-308 -35 -498 -88 -720 -199 -185 -93 -323 -190 -473 -334 -606 -582 -765 -1489 -390 -2236 410 -816 1319 -1232 2199 -1005 242 63 451 165 700 345 11 7 111 -87 426 -401 456 -454 455 -453 560 -441 132 16 213 142 178 274 -12 44 -46 81 -429 466 -317 318 -413 421 -406 431 195 268 309 518 371 808 32 153 44 440 25 594 -34 272 -125 542 -256 759 -202 333 -475 583 -820 750 -189 91 -345 140 -543 170 -97 15 -356 27 -422 19z m433 -453 c392 -83 718 -302 938 -629 340 -506 340 -1155 2 -1666 -90 -136 -273 -319 -409 -409 -284 -188 -614 -274 -947 -247 -526 43 -980 347 -1214 813 -346 690 -118 1522 533 1939 164 105 397 189 605 218 109 15 381 5 492 -19z" />
              </g>
            </svg></a> </li> */}
            <li className='profilemenu-item'><a href='#'>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25px" height="25px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M1106 4944 c-184 -44 -342 -200 -391 -385 -13 -46 -15 -345 -15 -1998 0 -2143 -4 -1998 62 -2123 57 -108 192 -216 318 -256 37 -11 88 -17 155 -17 119 1 203 25 288 84 30 21 247 195 483 387 235 191 444 356 463 366 42 22 128 24 174 4 18 -7 241 -183 496 -390 255 -207 485 -388 510 -400 75 -39 149 -56 236 -56 158 0 274 50 384 165 71 76 113 147 136 236 22 81 22 3917 0 3998 -49 187 -208 341 -396 386 -93 22 -2812 21 -2903 -1z m2847 -315 c47 -13 102 -60 128 -110 19 -37 19 -77 19 -1961 l0 -1923 -23 -39 c-12 -22 -39 -53 -60 -70 -34 -27 -48 -31 -110 -34 -55 -2 -80 1 -107 15 -19 10 -236 183 -482 383 -458 374 -528 423 -637 448 -121 28 -252 9 -370 -54 -40 -21 -245 -180 -521 -404 -504 -411 -513 -417 -608 -391 -57 15 -110 55 -139 107 l-23 39 0 1923 c0 1873 0 1924 19 1960 26 50 70 91 117 107 32 12 270 14 1399 15 919 0 1372 -4 1398 -11z" />
                </g>
              </svg>
            </a> </li>
            <li className='profilemenu-item'><a href='#'>
              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="25px" height="25px" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                  <path d="M2393 4945 c-201 -36 -383 -134 -524 -283 -178 -185 -269 -417 -269 -683 l0 -99 -198 0 c-217 0 -276 -9 -366 -58 -104 -55 -201 -178 -235 -297 -12 -40 -141 -2667 -141 -2860 0 -55 6 -123 14 -151 44 -167 193 -307 364 -343 75 -16 2969 -16 3044 0 172 36 319 174 364 343 8 28 14 96 14 151 0 193 -129 2820 -141 2860 -34 119 -131 242 -235 297 -90 49 -150 58 -365 58 l-196 0 -6 138 c-8 208 -54 356 -162 517 -206 310 -596 476 -962 410z m302 -320 c181 -38 349 -168 433 -335 51 -102 72 -193 72 -317 l0 -93 -640 0 -640 0 0 93 c1 197 61 349 189 478 156 155 370 219 586 174z m1208 -1069 c46 -17 74 -40 94 -80 12 -24 28 -287 80 -1380 35 -743 62 -1389 61 -1436 -3 -99 -19 -128 -84 -160 -40 -20 -57 -20 -1494 -20 -1437 0 -1454 0 -1494 20 -66 33 -81 61 -84 165 -1 50 26 693 61 1431 71 1481 63 1391 136 1436 l36 23 1040 5 c572 3 1168 6 1325 7 219 2 294 -1 323 -11z" />
                  <path d="M1692 3200 c-78 -48 -90 -124 -42 -272 48 -149 109 -247 230 -369 141 -142 262 -212 455 -264 95 -25 293 -31 398 -11 309 59 558 245 696 522 50 100 85 224 78 280 -9 80 -72 134 -157 134 -83 0 -138 -46 -160 -135 -45 -178 -163 -336 -313 -419 -197 -109 -441 -108 -635 4 -75 44 -181 148 -225 221 -21 35 -51 107 -68 160 -30 96 -53 131 -106 158 -35 18 -114 13 -151 -9z" />
                </g>
              </svg></a> </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Index