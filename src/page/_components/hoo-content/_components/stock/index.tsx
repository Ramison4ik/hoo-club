import React, { memo } from "react";
import {Text} from "src/_components/text";
import Slider from 'react-slick';
import {RightSliderButton} from "src/_components/right-slider-button";
import stockLeftSmoke from "src/page/_components/hoo-content/_assets/stock-left-smoke.svg";
import {SLIDER_IMG} from "./_constants";
import {ANCHORS} from "src/page/_components/_constants";
import './index.scss'

export const Stock = memo(() => {
  return (
    <div className="Stock__wrapper" id={ANCHORS.stocks}>
      <div className="Stock__text-wrapper">
        <div className="Stock__main-text">
          <Text size='h1-gagalin' color='White' text="Акции"/>
        </div>
        <img
          alt='HooClub'
          className='Stock__left-image'
          // https://caniuse.com/?search=lazy%20loading%20attribute
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          loading="lazy"
          src={stockLeftSmoke}
        />
      </div>
      <div className="Stock__slider-wrapper">
        <Slider
          accessibility
          className='Stock__carousel'
          infinite={true}
          nextArrow={<RightSliderButton />}
          prevArrow={null}
          slidesToShow={SLIDER_IMG.length - 1}
          swipeToSlide
          variableWidth
          slidesToScroll={1}
        >
          {SLIDER_IMG.map((item) => (
            <div key={item.id} className="Stock__carousel-item">
              <img  className="Stock__carousel-item-img" src={item.icon} />
              <div className="Stock__carousel-text-wrapper">
                <div className="Stock__carousel-stock-name">
                  <Text size='h3-mobile' color="White" text={item.text}/>
                </div>
                <div className="Stock__carousel-stock-date">
                  <Text size='h4-mobile' color="White" text={item.endDate}/>
                </div>
              </div>
            </div>
            )
          )}
        </Slider>
      </div>
    </div>
  )
});
