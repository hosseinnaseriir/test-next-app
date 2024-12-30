

"use client"
import React from 'react';
import { Card } from '@/components/Card/Card';
import data from '@/data/cards.json';
import { Swiper, SwiperSlide } from "swiper/react";
import { CardContents } from './ProductsModule.types';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Autoplay } from 'swiper/modules';

export default function ProductsModule() {

  return (
    <div>
      <Swiper
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
            loop: true,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
            loop: true,
          },
        }}
      >

        {
          ([...data, ...data] as CardContents)?.map((card, index) => (<SwiperSlide key={index}>
            <Card
              key={index}
              img={card.backgroundMedia?.src}
              header={card.title}
              subheader={card.title}
              description={card.Content}
              buttontext={card.action?.data?.text}
              badgecontent={card.type}
            />

          </SwiperSlide>))
        }
      </Swiper>

    </div>
  );
}