// import slides from "../../config/slides";
// import './hero.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectFade, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-fade'; 
// function HeroSection() {
//   return (
// <div className="hero-slider">
//       <Swiper
//         modules={[EffectFade, Autoplay]}
//         effect="fade"
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         loop={true}
//         speed={1000}
//         slidesPerView={1}
//       >
//         {slides.map((slide) => (
//           <SwiperSlide key={slide.id}>
//             <div className="slide-content">
//               <div className="hero-content">
//                   <h2 style={{width:'50%'}}>{slide.title}</h2>
//                   <button>Shop Now</button>
//               </div>
//               <img src={slide.image} alt={slide.title} className="slide-image"/>
//               {/* <div className="slide-text">
//                 <h1>{slide.title}</h1>
//               </div> */}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
// export default HeroSection;

import slides from "../../config/slides";
import './hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/effect-fade'; 

function HeroSection() {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        slidesPerView={1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <div className="hero-content">
                <h2>{slide.title}</h2>
                <Link to="/shop" className="hero-btn">Shop Now</Link>
              </div>
              <img src={slide.image} alt={slide.title} className="slide-image" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroSection;
