import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import {Text} from "src/_components/text";
import callback from "src/page/_components/hoo-content/_assets/callback.svg";
import message from "src/page/_components/hoo-content/_assets/message.svg";
import {ModalOrder} from "src/page/_components/hoo-content/_components/modal-order";
import './index.scss'

export const Calculation = memo(() => {
  const getWidth = () => window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;
  const [activeTabIndex, setActiveTab] = useState('2');
  const [activeHour, setActiveHour] = useState(2);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [width, setWidth] = useState(getWidth());


  useEffect(() => {
    const resizeListener = () => {
      setWidth(getWidth())
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, []);

  const isFirstTab = useMemo(() => activeTabIndex === '2', [activeTabIndex]);
  const isSecondTab = useMemo(() => activeTabIndex === '3', [activeTabIndex]);
  const isThirdTab = useMemo(() => activeTabIndex === '5', [activeTabIndex]);
  const isFourthTab = useMemo(() => activeTabIndex === '7', [activeTabIndex]);
  const isFifthTab = useMemo(() => activeTabIndex === '9', [activeTabIndex]);
  const isSixthTab = useMemo(() => activeTabIndex === '15', [activeTabIndex]);

  const isFirstHour = useMemo(() => activeHour === 2, [activeHour]);
  const isSecondHour = useMemo(() => activeHour === 4, [activeHour]);
  const isThirdHour = useMemo(() => activeHour === 5, [activeHour]);
  const isFourthHour = useMemo(() => activeHour === 6, [activeHour]);
  const isFifthHour = useMemo(() => activeHour === 7, [activeHour]);
  const isSixthHour = useMemo(() => activeHour === 8, [activeHour]);

  const handleChangeTabs = useCallback(( id: string) => () => {
    setActiveTab(id);
  }, []);

  const handleChangeHours = useCallback(( hour: number) => () => {
    setActiveHour(hour);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpened(false)
  };

  const handleOrderModal = () => {
    setIsModalOpened(true)
  };

  const getCost = useMemo((): string => {
    const hookaHours = Number(activeTabIndex)*1300;
    const hours = activeHour*1000;
    return `${hookaHours + hours} руб.`
  }, [activeTabIndex, activeHour]);

  const isMobileWidth = width > 700;

  return (
    <div className="Calculation__wrapper" id='calculation'>
      <div className="Calculation__title">
        <Text size='h0' color='White' text='Калькулятор'/>
      </div>
      <div className="Calculation__content">
        <div className="Calculation__tabs-wrapper">
          <ul className="Calculation__tabs">
            <li role='button' tabIndex={1} onClick={handleChangeTabs('2')} className="Calculation__tab">
              <div className={(isFirstTab ? 'Calculation__tab-underline' : '')}/>
              <Text size='h2' color='White' text='2 кальяна'/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeTabs('3')} className="Calculation__tab">
              <div className={(isSecondTab ? 'Calculation__tab-underline' : '')}/>
              <Text size='h2' color='White' text='3 кальяна'/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeTabs('5')} className="Calculation__tab">
              <div className={(isThirdTab ? 'Calculation__tab-underline' : '')}/>
              <Text size='h2' color='White' text='5 кальянов'/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeTabs('7')} className="Calculation__tab">
              <div className={(isFourthTab ? 'Calculation__tab-underline' : '')}/>
              <Text size='h2' color='White' text='7 кальянов'/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeTabs('9')} className="Calculation__tab">
              <div className={(isFifthTab ? 'Calculation__tab-underline' : '')}/>
              <Text size='h2' color='White' text='9 кальянов'/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeTabs('15')} className="Calculation__tab">
              <div className={(isSixthTab ? 'Calculation__tab-underline' : '')}/>
              <Text size='h2' color='White' text='15 кальянов'/>
            </li>
          </ul>
          <div className="Calculation__tabs-mobile">
            <div className="Calculation__tabs-mobile-wrapper">
              <div role='button' tabIndex={1} onClick={handleChangeTabs('2')} className="Calculation__tab">
                <div className={(isFirstTab ? 'Calculation__tab-underline' : 'Calculation__tab-underline-empty')}/>
                <Text size='h2' color='White' text='2 кальяна'/>
              </div>
              <div role='button' tabIndex={1} onClick={handleChangeTabs('3')} className="Calculation__tab">
                <div className={(isSecondTab ? 'Calculation__tab-underline' : 'Calculation__tab-underline-empty')}/>
                <Text size='h2' color='White' text='3 кальяна'/>
              </div>
              <div role='button' tabIndex={1} onClick={handleChangeTabs('5')} className="Calculation__tab">
                <div className={(isThirdTab ? 'Calculation__tab-underline' : 'Calculation__tab-underline-empty')}/>
                <Text size='h2' color='White' text='5 кальянов'/>
              </div>
            </div>
            <div className="Calculation__tabs-mobile-wrapper">
              <div role='button' tabIndex={1} onClick={handleChangeTabs('7')} className="Calculation__tab">
                <div className={(isFourthTab ? 'Calculation__tab-underline' : 'Calculation__tab-underline-empty')}/>
                <Text size='h2' color='White' text='7 кальянов'/>
              </div>
              <div role='button' tabIndex={1} onClick={handleChangeTabs('9')} className="Calculation__tab">
                <div className={(isFifthTab ? 'Calculation__tab-underline' : 'Calculation__tab-underline-empty')}/>
                <Text size='h2' color='White' text='9 кальянов'/>
              </div>
              <div role='button' tabIndex={1} onClick={handleChangeTabs('15')} className="Calculation__tab">
                <div className={(isSixthTab ? 'Calculation__tab-underline' : 'Calculation__tab-underline-empty')}/>
                <Text size='h2' color='White' text='15 кальянов'/>
              </div>
            </div>
          </div>
          <div className="Calculation__tabs-line"/>
        </div>
        <div className="Calculation__hours-wrapper">
          <ul className="Calculation__hours">
            <li role='button' tabIndex={1} onClick={handleChangeHours(2)} className="Calculation__hour">
              <div className={'Calculation__hour-round' + (isFirstHour ? ' Calculation__hour-round--active' : '')}/>
              <Text size='h2' color='White' text={!isMobileWidth ? '2' : '2 часа'}/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeHours(4)} className="Calculation__hour">
              <div className={'Calculation__hour-round' + (isSecondHour ? ' Calculation__hour-round--active' : '')}/>
              <Text size='h2' color='White' text={!isMobileWidth ? '4' : '4 часа'}/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeHours(5)} className="Calculation__hour">
              <div className={'Calculation__hour-round' + (isThirdHour ? ' Calculation__hour-round--active' : '')}/>
              <Text size='h2' color='White' text={!isMobileWidth ? '5' : '5 часов'}/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeHours(6)} className="Calculation__hour">
              <div className={'Calculation__hour-round' + (isFourthHour ? ' Calculation__hour-round--active' : '')}/>
              <Text size='h2' color='White' text={!isMobileWidth ? '6' : '6 часов'}/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeHours(7)} className="Calculation__hour">
              <div className={'Calculation__hour-round' + (isFifthHour ? ' Calculation__hour-round--active' : '')}/>
              <Text size='h2' color='White' text={!isMobileWidth ? '7' : '7 часов'}/>
            </li>
            <li role='button' tabIndex={1} onClick={handleChangeHours(8)} className="Calculation__hour">
              <div className={'Calculation__hour-round' + (isSixthHour ? ' Calculation__hour-round--active' : '')}/>
              <Text size='h2' color='White' text={!isMobileWidth ? '8' : '8 часов'}/>
            </li>
            <div className="Calculation__hours-line"/>
          </ul>
          <div className="Calculation__hours-master">
            <Text size={isMobileWidth ? 'h1-gagalin' : 'h2-gagalin'} color='White' text='Часы работы кальянного мастера'/>
          </div>
        </div>
        <div className="Calculation__cost-callback-wrapper">
          <div className="Calculation__cost-wrapper">
            <div className="Calculation__cost-text">
              <Text size={isMobileWidth ? 'h2-gagalin' : 'h3-gagalin'} color="White" text='Примерная стоимость : ' />
            </div>
            <div className="Calculation__cost">
              <Text size={isMobileWidth ? 'h2-gagalin' : 'h3-gagalin'} color="White" text={getCost} />
            </div>
          </div>
          <div className="Calculation__callback-wrapper">
            <div className="Calculation__callback">
              <div role="button" onClick={handleOrderModal} tabIndex={1} className="Calculation__combination-button">
                <div className="Calculation__callback-image-wrapper">
                  <img
                    alt='HooClub'
                    className='Calculation__callback-image'
                    // https://caniuse.com/?search=lazy%20loading%20attribute
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    loading="lazy"
                    src={callback}
                  />
                </div>
                <Text size='h2' color='White' text='Позвонить'/>
              </div>
            </div>
            <div className="Calculation__message">
              <a className="Calculation__message-link" href='https://t.me/HooClubb' target='_blank'>
                <div className="Calculation__message-image-wrapper">
                  <img
                    alt='HooClub'
                    className='Calculation__message-image'
                    // https://caniuse.com/?search=lazy%20loading%20attribute
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    loading="lazy"
                    src={message}
                  />
                </div>
                <Text size='h2' color='White' text='Написать'/>
              </a>
            </div>
          </div>
        </div>
        {isModalOpened&&(
          <ModalOrder isModalOpened={isModalOpened} onCloseModal={handleCloseModal}  title='Закажите обратный звонок!'/>
        )}
      </div>
    </div>
  )
});
