import React from 'react';
import Frame from "../../assets/image/frame.jpg"
import Frame2 from "../../assets/image/frame2.jpg"
import Frame3 from "../../assets/image/frame3.jpg"
import Frame4 from "../../assets/image/frame4.jpg"
import Frame5 from "../../assets/image/frame5.jpg"
import { Carousel } from '@trendyol-js/react-carousel';

function index() {
  return (
   <>
   <section className='banner'>
    <div className='banner-img'>
        <div className='banner-content'>
        
          <h2>Specially Made</h2>
          <p>Make your <span>“someone special” </span>feel <span>“special”</span></p>
          
        </div>
    </div>
   </section>
   <section className='block new-drops'>
    <div className='block-container'>
       <div className='block-title'>
           <h3>SHOP THE NEW DROP!</h3>
       </div>
       <div className='block-content'>
       <Carousel show={4} slide={2} swiping={true} responsive={true} infinite={true}>
             <div className='productItem'>
              <div className='productItem-wrapper'>
                <a href='#' className='productItem-imageWrapper'>
                  <img src={Frame} />
                </a>
                <div className='productItem-info'>
                  <a href='#' className='ProductItem-title'>
                    <h4>Love Box Frame</h4>
                  </a>
                  <div className='productItem-priceList'>
                     <span className='ProductItem__Price'>Rs.699</span>
                  </div>
                </div>
              </div>
             </div>
             <div className='productItem'>
              <div className='productItem-wrapper'>
                <a href='#' className='productItem-imageWrapper'>
                  <img src={Frame2} />
                </a>
                <div className='productItem-info'>
                  <a href='#' className='ProductItem-title'>
                    <h4>Love Box Frame</h4>
                  </a>
                  <div className='productItem-priceList'>
                     <span className='ProductItem__Price'>Rs.699</span>
                  </div>
                </div>
              </div>
             </div>
             <div className='productItem'>
              <div className='productItem-wrapper'>
                <a href='#' className='productItem-imageWrapper'>
                  <img src={Frame3} />
                </a>
                <div className='productItem-info'>
                  <a href='#' className='ProductItem-title'>
                    <h4>Love Box Frame</h4>
                  </a>
                  <div className='productItem-priceList'>
                     <span className='ProductItem__Price'>Rs.699</span>
                  </div>
                </div>
              </div>
             </div>
             <div className='productItem'>
              <div className='productItem-wrapper'>
                <a href='#' className='productItem-imageWrapper'>
                  <img src={Frame5} />
                </a>
                <div className='productItem-info'>
                  <a href='#' className='ProductItem-title'>
                    <h4>Love Box Frame</h4>
                  </a>
                  <div className='productItem-priceList'>
                     <span className='ProductItem__Price'>Rs.699</span>
                  </div>
                </div>
              </div>
             </div>
             <div className='productItem'>
              <div className='productItem-wrapper'>
                <a href='#' className='productItem-imageWrapper'>
                  <img src={Frame4} />
                </a>
                <div className='productItem-info'>
                  <a href='#' className='ProductItem-title'>
                    <h4>Love Box Frame</h4>
                  </a>
                  <div className='productItem-priceList'>
                     <span className='ProductItem__Price'>Rs.699</span>
                  </div>
                </div>
              </div>
             </div>
          </Carousel>
       </div>
    </div>
   </section>
</>
  )
}

export default index