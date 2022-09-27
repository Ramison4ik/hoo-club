import React, { memo } from "react";
import {Text} from "src/_components/text";
import Slider from 'react-slick';
import {RightSliderButton} from "src/_components/right-slider-button";
import {SLIDER_IMG} from "./_constants";
import mixSmoke from "src/page/_components/hoo-content/_assets/mix-smoke.svg";
import {ANCHORS} from "src/page/_components/_constants";
import './index.scss'

export const Mixes = memo(() => {
  return (
    <div className="Mixes__wrapper" id={ANCHORS.mixes}>
      <div className="Mixes__text-wrapper">
        <div className="Mixes__main-text">
          <Text size='h1-gagalin' color='White' text="Миксы"/>
        </div>
        <div className="Mixes__secondary-text">
          <Text size='h3' color='White' text="Мы можем предложить табак самых разных видов и вкусов. Лучшие кальянные бренды, сертифицированная и акцизная продукция: DarkSide, Fumari, DailyHookah, Spectrum, Afzal, Serbetli, MustHave, Duft, - выбор за Вами."/>
        </div>
        <img
          alt='HooClub'
          className='Mixes__mix-image'
          // https://caniuse.com/?search=lazy%20loading%20attribute
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          loading="lazy"
          src={mixSmoke}
        />
      </div>
      <div className="Mixes__slider-wrapper">
        <Slider
          accessibility
          className='Mixes__carousel'
          infinite={true}
          nextArrow={<RightSliderButton />}
          prevArrow={null}
          slidesToShow={SLIDER_IMG.length - 1}
          swipeToSlide
          variableWidth
          slidesToScroll={1}
        >
          {SLIDER_IMG.map((item) => (
            <div key={item.id} className="Mixes__carousel-item">
              <img  className="Mixes__carousel-item-img" src={item.icon} />
            </div>
            )
          )}
        </Slider>
      </div>
    </div>
  )
});
