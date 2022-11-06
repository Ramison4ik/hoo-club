import React, { memo, useState, useMemo, useCallback } from "react";
import {Text} from "src/_components/text";
import {HOOKA_TO_HOME, HOOKA_TO_CORPORATE} from "./_constants";
import {ANCHORS} from "src/page/_components/_constants";
import Slider from 'react-slick';
import truck from "src/page/_components/hoo-content/_assets/truck.svg";
import {HookaCombinations} from "./_components/hooka-combinations";
import {ModalOrder} from "src/page/_components/hoo-content/_components/modal-order";
import hooka from "src/page/_components/hoo-content/_assets/hooka.svg";
import present from "src/page/_components/hoo-content/_assets/Present.svg";
import './index.scss'

export const HookaOrder = memo(() => {
  const [activeTabIndex, setActiveTab] = useState('1');
  const [isModalOpened, setIsModalOpened] = useState(false);

  const isFirstTab = useMemo(() => activeTabIndex === '1', [activeTabIndex]);
  const isSecondTab = useMemo(() => activeTabIndex === '2', [activeTabIndex]);

  const handleChangeTabs = useCallback(( id: string) => () => {
    setActiveTab(id);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpened(false)
  };

  const handleOrderModal = () => {
    setIsModalOpened(true)
  };

  return (
    <div className="HookaOrder__wrapper" id={ANCHORS.hooka}>
      <div className="HookaOrder__header">
        <div className="HookaOrder__title">
          <Text size='h0' color='White' text='Заказать кальян'/>
        </div>
        <div className="HookaOrder__tabs-wrapper">
          <ul className="HookaOrder__tabs">
            <li role='button' tabIndex={1} onClick={handleChangeTabs('1')} className="HookaOrder__first-tab">
              <div className={(isFirstTab ? 'HookaOrder__tab-underline' : '')}/>
              <Text size='h2' color='White' text='кальян на дом'/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeTabs('2')} className="HookaOrder__second-tab">
              <div className={(isSecondTab ? 'HookaOrder__tab-underline' : '')}/>
              <Text size='h2' color='White' text='кальян на мероприятие'/>
            </li>
          </ul>
          <div className="HookaOrder__tabs-line"/>
        </div>
      </div>
        {isFirstTab && (
          <div className="HookaOrder__tabs-content-wrapper">
            <div className="HookaOrder__tabs-content-desktop">
              <HookaCombinations combination={HOOKA_TO_HOME} onOrderModal={handleOrderModal}/>
            </div>
            <div className="HookaOrder__tabs-content-mobile">
              <Slider
                accessibility
                className='HookaOrder__carousel'
                infinite={true}
                nextArrow={null}
                prevArrow={null}
                slidesToShow={HOOKA_TO_HOME.length - 1}
                swipeToSlide
                variableWidth
                slidesToScroll={1}
              >
                {HOOKA_TO_HOME.map(({id, firstLi, secondLi, thirdLi, price}) => (
                    <div key={id} className="HookaOrder__combination-hooka">
                      <div className="HookaOrder__combination-wrapper">
                        <div className="HookaOrder__combination">
                          <ul className="HookaOrder__combination-list">
                            <li className="HookaOrder__combination-list-item">
                              <Text size='h2-mobile' color='White' text={firstLi}/>
                            </li>
                            <li className="HookaOrder__combination-list-item">
                              <Text size='h2-mobile' color='White' text={secondLi}/>
                            </li>
                            <li className="HookaOrder__combination-list-item">
                              <Text size='h2-mobile' color='White' text={thirdLi}/>
                            </li>
                          </ul>
                        </div>
                        <img
                          alt='HooClub'
                          className='HookaOrder__hooka-image'
                          // https://caniuse.com/?search=lazy%20loading%20attribute
                          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore
                          loading="lazy"
                          src={hooka}
                        />
                      </div>
                      <div className="HookaOrder__combination-bottom">
                        <div className="HookaOrder__combination-price">
                          <Text size="h1-gagalin" color="White" text={price}/>
                        </div>
                        <div className="HookaOrder__combination-button-wrapper">
                          <div role="button" onClick={handleOrderModal} tabIndex={1} className="HookaOrder__combination-button">
                            <Text size='h4' color="White" text='Заказать'/>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </Slider>
            </div>
          </div>
        )}
        {isSecondTab && (
          <div className="HookaOrder__tabs-content-wrapper">
            <div className="HookaOrder__tabs-content-desktop">
              <HookaCombinations combination={HOOKA_TO_CORPORATE} onOrderModal={handleOrderModal} withPresent/>
            </div>
            <div className="HookaOrder__tabs-content-mobile">
              <Slider
                accessibility
                className='HookaOrder__carousel'
                infinite={true}
                nextArrow={null}
                prevArrow={null}
                slidesToShow={HOOKA_TO_CORPORATE.length - 1}
                swipeToSlide
                variableWidth
                slidesToScroll={1}
              >
                {HOOKA_TO_CORPORATE.map(({id, firstLi, secondLi, thirdLi, price, prize}) => (
                <div key={id} className="HookaOrder__combination-hooka">
                  <div className="HookaOrder__combination-wrapper">
                    <div className="HookaOrder__combination">
                      <ul className="HookaOrder__combination-list">
                        <li className="HookaOrder__combination-list-item">
                          <Text size='h2-mobile' color='White' text={firstLi}/>
                        </li>
                        <li className="HookaOrder__combination-list-item">
                          <Text size='h2-mobile' color='White' text={secondLi}/>
                        </li>
                        <li className="HookaOrder__combination-list-item">
                          <Text size='h2-mobile' color='White' text={thirdLi}/>
                        </li>
                        <li className="HookaOrder__combination-list-item, HookaOrder__combination-list-item--present">
                          <div className="HookaOrder__list-item-present-wrapper">
                            <div className="HookaOrder__list-item-present-image">
                              <img
                                alt='HooClub'
                                className='HookaOrder__present-image'
                                // https://caniuse.com/?search=lazy%20loading%20attribute
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                loading="lazy"
                                src={present}
                              />
                            </div>
                            <div className="HookaOrder__list-item-present-text">
                              <Text size='h2-mobile' color='Yellow' text={prize}/>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <img
                      alt='HooClub'
                      className='HookaOrder__hooka-image'
                      // https://caniuse.com/?search=lazy%20loading%20attribute
                      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                      // @ts-ignore
                      loading="lazy"
                      src={hooka}
                    />
                  </div>
                  <div className="HookaOrder__combination-bottom">
                    <div className="HookaOrder__combination-price">
                      <Text size="h1-gagalin" color="White" text={price}/>
                    </div>
                    <div className="HookaOrder__combination-button-wrapper">
                      <div role="button" onClick={handleOrderModal} tabIndex={1} className="HookaOrder__combination-button">
                        <Text size='h4' color="White" text='Заказать'/>
                      </div>
                    </div>
                  </div>
                </div>
                  ))}
              </Slider>
            </div>
          </div>
        )}
      <div className="HookaOrder__delivery-wrapper">
        <div className="HookaOrder__delivery-top">
          <div className="HookaOrder__delivery-terms-wrapper">
            <div className="HookaOrder__delivery-terms-image">
              <img
                alt='HooClub'
                className='HookaOrder__terms-image'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={truck}
              />
              <div className="HookaOrder__delivery-terms-text">
                <Text size='h2-bold' color='White' text='Условия доставки:'/>
              </div>
            </div>
            <div className="HookaOrder__delivery-terms-second-text">
              <Text size='h3' color="White" text='От 15 кальянов доставка бесплатная !'/>
            </div>
            <div className="HookaOrder__delivery-terms-text-mobile">
              <Text size='h3' color="Purple" text='От 15 кальянов доставка бесплатная !'/>
            </div>
          </div>
        </div>
        <div className="HookaOrder__delivery-bottom">
          <div className="HookaOrder__delivery-block-first">
            <Text size='h2-mobile' color='White' text='В пределах МКАД 500₽'/>
          </div>
          <div className="HookaOrder__delivery-block-second">
            <Text size='h2-mobile' color="White" text='1-15 км от МКАД  - 1000₽'/>
          </div>
          <div className="HookaOrder__delivery-block-third">
            <Text size='h2-mobile' color="White" text='15-30 км от МКАД  -1500₽'/>
          </div>
        </div>
      </div>
      {isModalOpened&&(
        <ModalOrder isModalOpened={isModalOpened} onCloseModal={handleCloseModal}  title='Закажите обратный звонок!'/>
      )}
    </div>
  )
});
