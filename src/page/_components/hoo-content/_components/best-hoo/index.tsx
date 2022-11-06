import React, {memo, useState} from "react";
import leftHooka from "src/page/_components/hoo-content/_assets/left-hooka.svg";
import rightHooka from "src/page/_components/hoo-content/_assets/rigth-hooka.svg";
import classic from "src/page/_components/hoo-content/_assets/classic.svg";
import grapefruit from "src/page/_components/hoo-content/_assets/grapfruit.svg";
import garnet from "src/page/_components/hoo-content/_assets/granate.svg";
import pineapple from "src/page/_components/hoo-content/_assets/paneapple.svg";
import {Text} from "src/_components/text";
import './index.scss'
import {ModalOrder} from "src/page/_components/hoo-content/_components/modal-order";

export const BestHoo = memo(() => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpened(false)
  };

  const handleOrderModal = () => {
    setIsModalOpened(true)
  };
  return (
    <div className="BestHoo__wrapper">
      <div className="BestHoo__right-smoke">
        <img
          alt='HooClub'
          className='BestHoo__right-smoke'
          // https://caniuse.com/?search=lazy%20loading%20attribute
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          loading="lazy"
          src={leftHooka}
        />
      </div>
      <div className="BestHoo__left-smoke">
        <img
          alt='HooClub'
          className='BestHoo__left-smoke'
          // https://caniuse.com/?search=lazy%20loading%20attribute
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          loading="lazy"
          src={rightHooka}
        />
      </div>
      <div className="BestHoo__content">
        <div className="BestHoo__content-text-wrapper">
          <div className="BestHoo__content-text">
            <Text size='h1-gagalin' color='White' text='Hooclub делает лучшие кальяны !'/>
          </div>
          <div className="BestHoo__hoo-classification-wrapper-mobile">
            <div className="BestHoo__hoo-classic-first">
              <div className="BestHoo__hoo-classic">
                <div className="BestHoo__hoo-img">
                  <img
                    alt='HooClub'
                    className='BestHoo__classic'
                    // https://caniuse.com/?search=lazy%20loading%20attribute
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    loading="lazy"
                    src={classic}
                  />
                </div>
                <div className="BestHoo__hoo-price">
                  <div className="BestHoo__hoo-text-up">
                    <Text size='h3' color='White' text='Классический'/>
                  </div>
                  <div className="BestHoo__hoo-text-down">
                    <Text size='h3' color='White' text='1 300 р'/>
                  </div>
                </div>
              </div>
              <div className="BestHoo__hoo-grapefruit">
                <div className="BestHoo__hoo-img">
                  <img
                    alt='HooClub'
                    className='BestHoo__grapefruit'
                    // https://caniuse.com/?search=lazy%20loading%20attribute
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    loading="lazy"
                    src={grapefruit}
                  />
                </div>
                <div className="BestHoo__hoo-price">
                  <div className="BestHoo__hoo-text-up">
                    <Text size='h3' color='White' text='На грейпфруте'/>
                  </div>
                  <div className="BestHoo__hoo-text-down">
                    <Text size='h3' color='White' text='1 800 р'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="BestHoo__hoo-classic-second">
              <div className="BestHoo__hoo-garnet">
                <div className="BestHoo__hoo-img">
                  <img
                    alt='HooClub'
                    className='BestHoo__garnet'
                    // https://caniuse.com/?search=lazy%20loading%20attribute
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    loading="lazy"
                    src={garnet}
                  />
                </div>
                <div className="BestHoo__hoo-price">
                  <div className="BestHoo__hoo-text-up">
                    <Text size='h3' color='White' text='На гранате'/>
                  </div>
                  <div className="BestHoo__hoo-text-down">
                    <Text size='h3' color='White' text='2 000 р'/>
                  </div>
                </div>
              </div>
              <div className="BestHoo__hoo-pineapple">
                <div className="BestHoo__hoo-img">
                  <img
                    alt='HooClub'
                    className='BestHoo__pineapple'
                    // https://caniuse.com/?search=lazy%20loading%20attribute
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    loading="lazy"
                    src={pineapple}
                  />
                </div>
                <div className="BestHoo__hoo-price">
                  <div className="BestHoo__hoo-text-up">
                    <Text size='h3' color='White' text='На ананасе'/>
                  </div>
                  <div className="BestHoo__hoo-text-down">
                    <Text size='h3' color='White' text='2 400 р'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="BestHoo__content-button-wrapper">
            <div role='button' onClick={handleOrderModal} tabIndex={0} className="BestHoo__content-button">
              <Text size='h3' color='White' text='Заказать кальян'/>
            </div>
          </div>
          {isModalOpened&&(
            <ModalOrder isModalOpened={isModalOpened} onCloseModal={handleCloseModal}  title='Закажите обратный звонок!'/>
          )}
        </div>
        <div className="BestHoo__hoo-classification-wrapper">
          <div className="BestHoo__hoo-classic">
            <div className="BestHoo__hoo-img">
              <img
                alt='HooClub'
                className='BestHoo__classic'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={classic}
              />
            </div>
            <div className="BestHoo__hoo-price">
              <div className="BestHoo__hoo-text-up">
                <Text size='h3' color='White' text='Классический'/>
              </div>
              <div className="BestHoo__hoo-text-down">
                <Text size='h3' color='White' text='1 300 р'/>
              </div>
            </div>
          </div>
          <div className="BestHoo__hoo-grapefruit">
            <div className="BestHoo__hoo-img">
              <img
                alt='HooClub'
                className='BestHoo__grapefruit'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={grapefruit}
              />
            </div>
            <div className="BestHoo__hoo-price">
              <div className="BestHoo__hoo-text-up">
                <Text size='h3' color='White' text='На грейпфруте'/>
              </div>
              <div className="BestHoo__hoo-text-down">
                <Text size='h3' color='White' text='1 800 р'/>
              </div>
            </div>
          </div>
          <div className="BestHoo__hoo-garnet">
            <div className="BestHoo__hoo-img">
              <img
                alt='HooClub'
                className='BestHoo__garnet'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={garnet}
              />
            </div>
            <div className="BestHoo__hoo-price">
              <div className="BestHoo__hoo-text-up">
                <Text size='h3' color='White' text='На гранате'/>
              </div>
              <div className="BestHoo__hoo-text-down">
                <Text size='h3' color='White' text='2 000 р'/>
              </div>
            </div>
          </div>
          <div className="BestHoo__hoo-pineapple">
            <div className="BestHoo__hoo-img">
              <img
                alt='HooClub'
                className='BestHoo__pineapple'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={pineapple}
              />
            </div>
            <div className="BestHoo__hoo-price">
              <div className="BestHoo__hoo-text-up">
                <Text size='h3' color='White' text='На ананасе'/>
              </div>
              <div className="BestHoo__hoo-text-down">
                <Text size='h3' color='White' text='2 400 р'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});
