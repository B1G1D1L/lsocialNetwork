import React, { ChangeEvent, useState } from 'react'


import { Navigation } from 'swiper'

import { Swiper, SwiperSlide, } from 'swiper/react';

import 'swiper/swiper-bundle.min.css'


import styles from './FriendsParty.module.css'
import { Field } from '../Field/Field'


export const FriendsParty = () => {
  const [value, setValue] = useState('')

  const handleChange = (value: string) => {
    setValue(value)
    console.log(value)
  }

  const handleSubmit = (value: string) => {
    console.log(value)
  }

  return (
    <div className={styles.friends}>
      <Field
        onChange={handleChange}
        onSubmit={handleSubmit}
        maxWidth='100%'
        placeholder="Search Friends!"
      />
      <Shorts />
    </div>
  )
}









const Shorts = () => {
  return (
    <Swiper
      // install Swiper modules
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      modules={[Navigation]}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper >
  )
}
