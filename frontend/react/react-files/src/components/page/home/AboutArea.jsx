import React from "react";
import Slider from "react-slick";

import { useSelector } from "react-redux";

function AboutArea() {
   const aboutCarousel = {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      autoplay: true,
      speed: 2000,
      focusOnSelect: true,
      responsive: [
         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 1008,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 800,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };
   const { yoriq } = useSelector((state) => state.yoriqnoma);
   return (
      <>
         <div className="about-area about-area-design-2 mt-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                     <Slider
                        {...aboutCarousel}
                        className="about-wrap about-wrap-design-2 owl-carousel mb-0"
                     >
                        {yoriq.map((val) => (
                           <div className="about-box text-center">
                              <div className="about-icon">
                                 <img
                                    src={
                                       process.env.PUBLIC_URL + "/images/icons/about-home-2-2.svg"
                                    }
                                    alt="aboutIcon"
                                 />
                              </div>
                              <div className="about-content">
                                 <h3>{val.name}</h3>
                                 <p>
                                    It is a long established fact that looking at on this hav’n its
                                    layout.
                                 </p>
                              </div>
                           </div>
                        ))}
                        <div className="about-box text-center">
                           <div className="about-icon">
                              <img
                                 src={process.env.PUBLIC_URL + "/images/icons/about-home-2-2.svg"}
                                 alt="aboutIcon"
                              />
                           </div>
                           <div className="about-content">
                              <h3>sabzavot</h3>
                              <p>
                                 Sabzavotlarni zararkunandalardan ximoyalash va yaxshi xosil olish
                              </p>
                           </div>
                        </div>
                        <div className="about-box text-center">
                           <div className="about-icon">
                              <img
                                 src={process.env.PUBLIC_URL + "/images/icons/about-home-2-2.svg"}
                                 alt="aboutIcon"
                              />
                           </div>
                           <div className="about-content">
                              <h3>poliz</h3>
                              <p>
                                 Poliz mahsulotlaridan yaxshi foydalanish va ularni yaxshi parvarish qilish
                              </p>
                           </div>
                        </div>
                     </Slider>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default AboutArea;
