import React, { useState } from "react";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import s from "../assets/style/style.module.css";
import "swiper/css/effect-coverflow";

import userpic1 from "../assets/images/userpic-1.svg";
import userpic2 from "../assets/images/userpic-2.svg";
import userpic3 from "../assets/images/userpic-3.svg";
import leftbtnIcon from "../assets/images/left-btn-icon.svg";
import rightbtnIcon from "../assets/images/right-btn-icon.svg";

import { Navigation, EffectCoverflow } from "swiper";
import { Breakpoint } from "react-socks";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      icon: userpic3,
      name: "Rodolfo Goode",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.",
    },
    {
      icon: userpic2,
      name: "Mike Asskicker",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.",
    },
    {
      icon: userpic3,
      name: "Clinton Mcclure",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.",
    },
    {
      icon: userpic1,
      name: "Clinton Mcclure",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.",
    },
    {
      icon: userpic3,
      name: "Clinton Mcclure",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.",
    },
    {
      icon: userpic2,
      name: "Clinton Mcclure",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.",
    },
  ];

  return (
    <>
      <Breakpoint customQuery="(min-width: 768px)">
        <div className={s.sliderWrapper}>
          <Swiper
            navigation={true}
            slidesPerView={3}
            spaceBetween={2}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            modules={[Navigation]}
            loop={true}
          >
            {testimonials.map((el, key) => (
              <SwiperSlide key={key}>
                <div className={classnames(s.testimonialsCard)}>
                  <div className={s.testimonialHeader}>
                    <img src={el.icon} alt="avatar" />
                    <h3>{el.name}</h3>
                  </div>
                  <div>
                    <h4>{el.text}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Breakpoint>
      <Breakpoint small down>
        <div className={s.sliderWrapper}>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            coverflowEffect={{
              rotate: 25,
              stretch: -50,
              depth: 100,
              modifier: 1,
              slideShadows:false,
              scale: 1
            }}
            pagination={true}
            modules={[EffectCoverflow]}
            className="mySwiper"
            loop={true}
          >
            {testimonials.map((el, key) => (
              <SwiperSlide key={key}>
                <div className={classnames(s.testimonialsCard)}>
                  <div className={s.testimonialHeader}>
                    <img src={el.icon} alt="avatar" />
                    <h3>{el.name}</h3>
                  </div>
                  <div>
                    <h4>{el.text}</h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Breakpoint>
    </>
  );
}
