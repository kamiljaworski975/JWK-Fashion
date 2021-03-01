import React from 'react';

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import heroSliderData from '../../data/hero-sliders/hero-slider-one.json';
import HeroSliderOneSingle from '../../components/hero-slider/HeroSliderOneSingle';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

SwiperCore.use([Navigation]);

const HeroSliderOne = () => {
  const params = {
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    renderPrevButton: () => (
      <button
        onClick={() => console.log('prev butt')}
        className='swiper-button-prev ht-swiper-button-nav'
      >
        <i className='pe-7s-angle-left' />
      </button>
    ),
    renderNextButton: () => (
      <button className='swiper-button-next ht-swiper-button-nav'>
        <i className='pe-7s-angle-right' />
      </button>
    ),
  };

  return (
    <div className='slider-area'>
      <div className='slider-active nav-style-1'>
        <Swiper params={params} slidesPerView={1} navigation>
          {heroSliderData &&
            heroSliderData.map((single, key) => {
              return (
                <SwiperSlide key={key}>
                  <HeroSliderOneSingle
                    sliderClassName='swiper-slide'
                    data={single}
                    key={key}
                  />
                </SwiperSlide>
              );
            })}
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSliderOne;
