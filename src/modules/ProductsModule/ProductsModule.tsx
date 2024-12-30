

"use client"
import React from 'react';
import { Card } from '@/components/Card/Card';
import data from '@/data/cards.json';
import { Swiper, SwiperSlide } from "swiper/react";
import { CardContents } from './ProductsModule.types';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function ProductsModule() {

  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={50}
        loop={true}
      >

        {
          (data as CardContents)?.map((card, index) => (<SwiperSlide key={index}>
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