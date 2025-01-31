import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Only one Swiper CSS import is necessary
import './Round.css'; // Your CSS file for custom styles

// Images imports
import hoddie from '../Assets/hoddie.webp';
import oversizedShirt from '../Assets/oversizeshirt.webp';
import polo from '../Assets/polo.webp';
import shirts from '../Assets/shirts.webp';
import tshirts from '../Assets/tshirts.webp';
import arc from  '../Assets/arc.webp'
import jacket from '../Assets/jacket.webp'
import sweatshirt from '../Assets/sweatshirt.webp'


const categories = [
  { name: 'ARC', image: arc},
  { name: 'JACKET', image: jacket},
  { name: 'HOODIES', image: hoddie },
  { name: 'OVERSIZED SHIRT', image: oversizedShirt },
  { name: 'POLO', image: polo },
  { name: 'SHIRTS', image: shirts },
  { name: 'SWEATSHIRT', image: sweatshirt },  
  { name: 'TSHIRTS', image: tshirts },
];

const SwiperComponent = () => {
  return (
    <section className="swiper-section">
      <div className="swiper-container">
        <Swiper
          spaceBetween={15}
          slidesPerView="auto"
          freeMode={true}
          simulateTouch={true}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              {/* <a href="#"> */}
                <img src={category.image} alt={category.name} />
              {/* </a> */}
              <p className="bubble_text">{category.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default SwiperComponent;
