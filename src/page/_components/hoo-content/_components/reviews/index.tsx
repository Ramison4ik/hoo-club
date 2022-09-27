import React, { memo } from "react";
import {Text} from "src/_components/text";
import Slider from 'react-slick';
import {Star} from "src/page/_components/hoo-content/_components/reviews/_components/star";
import {RightSliderButton} from "src/_components/right-slider-button";
import reviewSmoke from "src/page/_components/hoo-content/_assets/review-smoke.svg";
import {SLIDER_IMG} from "./_constants";
import {ANCHORS} from "src/page/_components/_constants";
import './index.scss'

export const Reviews = memo(() => {
  return (
    <div className="Reviews__wrapper" id={ANCHORS.reviews}>
      <div className="Reviews__text-wrapper">
        <div className="Reviews__main-text">
          <Text size='h1-gagalin' color='White' text="Отзывы"/>
        </div>
        <img
          alt='HooClub'
          className='Reviews__mix-image'
          // https://caniuse.com/?search=lazy%20loading%20attribute
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          loading="lazy"
          src={reviewSmoke}
        />
      </div>
      <div className="Reviews__slider-wrapper">
        <Slider
          accessibility
          className='Reviews__carousel'
          infinite={true}
          nextArrow={<RightSliderButton />}
          prevArrow={null}
          slidesToShow={SLIDER_IMG.length - 1}
          swipeToSlide
          variableWidth
          slidesToScroll={1}
        >
          {SLIDER_IMG.map((item) => (
            <div key={item.id} className="Reviews__carousel-item">
              <div className="Reviews__carousel-content">
                <div className="Reviews__carousel-img-wrapper">
                  <div className="Reviews__carousel-img">
                    <img  className="Reviews__carousel-item-img" src={item.icon} />
                  </div>
                  <div className="Reviews__carousel-name">
                    <Text size='h3-mobile' color='White' text={item.name}/>
                    <div className="Reviews__carousel-star">
                      <Star/>
                    </div>
                  </div>
                </div>
                <div className="Reviews__carousel-comment">
                  <Text size='h3-mobile' color='White' text={item.comment}/>
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
