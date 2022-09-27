import React, {memo, SyntheticEvent, useState} from "react";
import leftSmoke from './_assets/left-smoke.svg';
import rightSmoke from './_assets/right-smoke.svg';
import rightSmokeBottom from './_assets/right-smoke-bottom.svg';
import rightImage from './_assets/circle-image.png';
import {Text} from 'src/_components/text';
import {AboutUs} from "src/page/_components/hoo-content/_components/about-us";
import {HookaOrder} from "src/page/_components/hoo-content/_components/hooka-order";
import {Calculation} from "src/page/_components/hoo-content/_components/calculation";
import {Mixes} from "src/page/_components/hoo-content/_components/mixes";
import {Reviews} from "src/page/_components/hoo-content/_components/reviews";
import {Contacts} from "src/page/_components/hoo-content/_components/contacts";
import {BestHoo} from "src/page/_components/hoo-content/_components/best-hoo";
import {Stock} from "src/page/_components/hoo-content/_components/stock";
import {ModalOrder} from "src/page/_components/hoo-content/_components/modal-order";
import {Footer} from "src/page/_components/hoo-content/_components/footer";
import {pageNavigate} from "src/page/_components/hoo-header/_utils/handleNavigate";
import {Calculator} from "src/page/_components/hoo-content/_components/calculator";
import './index.scss'
import axios from "axios";

export const HooContent = memo(() => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  const handleClick = (event: SyntheticEvent<HTMLAnchorElement>) => {
    pageNavigate(event);
  };

  const handleCloseModal = () => {
    setIsModalOpened(false)
  };

  const handleOrderModal = () => {
    setIsModalOpened(true)
  };

  return (
    <>
      <div className="HooContent__wrapper">
        <div className="HooContent__left-smoke-wrapper">
          <img
            alt='HooClub'
            className='HooContent__left-smoke'
            // https://caniuse.com/?search=lazy%20loading%20attribute
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            loading="lazy"
            src={leftSmoke}
          />
        </div>
        <div className="HooContent">
          <div className="HooContent__title-wrapper">
            <div className="HooContent__title">
              <Text color='White' size='h0' text='Кальянный кейтеринг'/>
            </div>
            <div className="HooContent__text-wrapper">
              <div className="HooContent__text">
                <Text color='White' size='h3' text='Закажите кальяны на дом или на мероприятие в HooСlub , и наслаждайтесь праздником! О вашем комфорте, вкусных дымных кальянах  позаботятся наши опытные кальянные мастера.'/>
              </div>
              <div className="HooContent__text">
                <Text color='White' size='h3' text='Кальянный кейтеринг – это выездной кальянный бар на месте проведения мероприятия со всем необходимым оборудованием.'/>
              </div>
            </div>
            <div className="HooContent__buttons-wrapper">
              <div className="HooContent__button-order-wrapper">
                <button onClick={handleOrderModal} className="HooContent__button-order">
                  <Text size='h3-mobile' color='White' text="Заказать кальян"/>
                </button>
              </div>
              <div className="HooContent__button-check-price-wrapper">
                <button className="HooContent__button-check-price">
                  <div className="HooContent__button-calculator">
                    <Calculator/>
                  </div>
                    <a onClick={handleClick} href='#calculation' className="HooContent__button-calculator-link">
                      <Text size='h3-mobile' color='White' text="Расчитать стоимость"/>
                    </a>
                </button>
              </div>
            </div>
            {isModalOpened&&(
              <ModalOrder isModalOpened={isModalOpened} onCloseModal={handleCloseModal}  title='Закажите обратный звонок!'/>
            )}
          </div>
          <div className="HooContent__right-content-wrapper">
            <div className="HooContent__right-image">
              <img
                alt='HooClub'
                className='HooContent__right-image'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={rightImage}
              />
            </div>
            <div className="HooContent__right-smoke">
              <img
                alt='HooClub'
                className='HooContent__right-smoke'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={rightSmoke}
              />
            </div>
            <div className="HooContent__right-smoke-bottom">
              <img
                alt='HooClub'
                className='HooContent__right-smoke-bottom'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={rightSmokeBottom}
              />
            </div>
          </div>
        </div>
      </div>
      <AboutUs/>
      <HookaOrder/>
      <Calculation/>
      <BestHoo/>
      <Mixes/>
      <Reviews/>
      <Stock />
      <Contacts />
      <Footer />
    </>
  );
});
