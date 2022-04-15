import React, {useState} from "react";
import classnames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";

import s from '../assets/style/style.module.css'

import userpic1 from '../assets/images/userpic-1.svg'
import userpic2 from '../assets/images/userpic-2.svg'
import userpic3 from '../assets/images/userpic-3.svg'
import leftbtnIcon from '../assets/images/left-btn-icon.svg'
import rightbtnIcon from '../assets/images/right-btn-icon.svg'

import { Navigation } from "swiper";

export default function TestimonialsSlider() {
    const testimonials = [
        {
            icon: userpic3,
            name: 'Rodolfo Goode',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.'
        },
        {
            icon: userpic2,
            name: 'Mike Asskicker',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.'
        },
        {
            icon: userpic3,
            name: 'Clinton Mcclure',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.'
        },
        {
            icon: userpic1,
            name: 'Clinton Mcclure',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.'
        },
        {
            icon: userpic3,
            name: 'Clinton Mcclure',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.'
        },
        {
            icon: userpic2,
            name: 'Clinton Mcclure',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac feugiat adipiscing eu augue commodo etiam lacus egestas blandit.'
        }
    ]

    return(
        <>
            <div className={s.sliderWrapper}>
                <Swiper
                    navigation={true}
                    slidesPerView={3}
                    spaceBetween={1}
                    centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                    modules={[Navigation]}
                    loop={true}
                >
                    {
                        testimonials.map((el, key) => (
                            <SwiperSlide key={key}>
                                <div className={classnames(s.testimonialsCard)}>
                                    <div className={s.testimonialHeader}>
                                        <img src={el.icon} alt="avatar"/>
                                        <h3>{el.name}</h3>
                                    </div>
                                    <div>
                                        <h4>{el.text}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )

}
