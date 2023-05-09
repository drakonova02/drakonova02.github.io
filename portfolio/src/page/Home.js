import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade} from "swiper";
import { Link } from "react-router-dom";
import '../style/Main.css';
import avatar from '../image/avatar.jpg'
import site from '../image/site.png';
import contact from '../image/contact.jpg'

import 'swiper/css';
import "swiper/css/effect-fade";

const sliderHomePage = [
    {image: avatar, heading: 'Hello,', text: 'My name is Alesia Drakonova./nI am a Front-end Magento 2 Dev. I have been doing front-end for almost 2 years./nI am passionate about web, donuts & doing good./nI know how to work with WordPress, Magento 2, Shopify, I want to grow and get better.' ,to: '/resume', textButton: 'My Resume'},
    {image: site, heading: 'Let`s go,', text: 'If you want interesting and great site/nYou need to look my portfolio', to: '/portfolio', textButton: 'My Portfolio'},
    {image: contact, heading: 'Call me,', text: 'I wish we can do wonderful site/nYou can connect with me', to: '/contact', textButton: 'Connect'}
]

export default () => {
  return (
    <main className='main homepage'>
        <Swiper loop={true} effect={"fade"} modules={[Autoplay, EffectFade]} className="general-swiper" 
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}>
            { sliderHomePage.map(elem => {
                return ( 
                    <SwiperSlide key={ elem.id }>
                        <picture>
                            <img src={elem.image} />
                        </picture>
                        <div className='general-swiper-content'>
                            <h1>{elem.heading}</h1>
                            {elem.text.split('/n').map(paragrah => {
                                return (
                                    <p key={ paragrah.id }>{paragrah}</p>
                                )
                            })}
                            <Link to={elem.to} className='primary-button'>{elem.textButton}</Link>
                        </div>
                    </SwiperSlide>     
                )
            })}
        </Swiper>
    </main>
  );
};