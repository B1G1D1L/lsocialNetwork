import React, { useRef } from 'react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js'
import cn from 'classnames'

import 'swiper/swiper-bundle.css';
import './ShortStories.css'



export const ShortStories = () => {

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        crollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className='slide__wrap'>
            <div className='slide__stories'>
              <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="" />
              <span className='slide__stories--add' />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='slide__wrap'>
            <div className='slide__stories'>
              <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="" />
              <span className='slide__stories--add' />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='slide__wrap'>
            <div className='slide__stories'>
              <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="" />
              <span className='slide__stories--add' />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='slide__wrap'>
            <div className='slide__stories'>
              <img src="https://otkritkis.ru/wp-content/uploads/2021/10/ava-180.jpg" alt="" />
              <span className='slide__stories--add' />
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};