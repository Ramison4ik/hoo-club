import React, {memo, SyntheticEvent} from "react";
import {Modal} from "src/_components/modal";
import {MENU_ITEMS} from "src/page/_components/hoo-header/_constants";
import {Text} from "src/_components/text";
import phone from "src/page/_components/hoo-content/_assets/phone.svg";
import time from "src/page/_components/hoo-content/_assets/work-time.svg";
import logo from "src/page/_components/hoo-content/_assets/footer-logo.svg";
import vk from "src/page/_components/hoo-content/_assets/vk.svg";
import insta from "src/page/_components/hoo-content/_assets/insta.svg";
import telegram from "src/page/_components/hoo-content/_assets/Telegram.svg";
import './index.scss'

type PropsType = {
  isBurgerOpened: boolean;
  burgerMenuClose: () => void;
  handleNavigate: (event: SyntheticEvent<HTMLAnchorElement>) => void;
}

export const BurgerMenu = memo(({handleNavigate,isBurgerOpened, burgerMenuClose}:PropsType) => {
  return (
    <Modal isOpened={isBurgerOpened} isShowCloseIcon isFullScreen onClose={burgerMenuClose}>
      <div className="BurgerMenu">
        <div className="BurgerMenu__header">
          <img
            alt='HooClub'
            className='BurgerMenu__logo'
            // https://caniuse.com/?search=lazy%20loading%20attribute
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            loading="lazy"
            src={logo}
          />
          <a href="https://vk.com/id751246017" target="_blank" >
            <img
              alt='HooClub'
              className='BurgerMenu__vk-logo'
              // https://caniuse.com/?search=lazy%20loading%20attribute
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              loading="lazy"
              src={vk}
            />
          </a>
          <a href="https://instagram.com/hoo.club_moscow?igshid=YzA2ZDJiZGQ=" target="_blank" >
            <img
              alt='HooClub'
              className='BurgerMenu__insta-logo'
              // https://caniuse.com/?search=lazy%20loading%20attribute
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              loading="lazy"
              src={insta}
            />
          </a>
          <a href="https://t.me/HooClubb" target="_blank" >
            <img
              alt='HooClub'
              className='BurgerMenu__telegram-logo'
              // https://caniuse.com/?search=lazy%20loading%20attribute
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              loading="lazy"
              src={telegram}
            />
          </a>
        </div>
        <div className="BurgerMenu__burger-menu">
          <ul className="BurgerMenu__burger-menu-list-wrapper">
            {MENU_ITEMS.map(({id, text, link}) => (
              <li key={id} className="BurgerMenu__burger-menu-list">
                <a onClick={handleNavigate} href={link} className="BurgerMenu__burger-menu-list-link">
                  <Text color='White' size='h3-mobile' text={text}/>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="BurgerMenu__line"/>
        <div className="BurgerMenu__information">
          <div className="BurgerMenu__information-img">
            <img
              alt='HooClub'
              className='BurgerMenu__image'
              // https://caniuse.com/?search=lazy%20loading%20attribute
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              loading="lazy"
              src={phone}
            />
          </div>
          <Text size='h3' color='White' text='+7 (989) 573 99 14' />
        </div>
        <div className="Contacts__information">
          <div className="Contacts__information-img">
            <img
              alt='HooClub'
              className='Contacts__image'
              // https://caniuse.com/?search=lazy%20loading%20attribute
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              loading="lazy"
              src={time}
            />
          </div>
          <Text size='h3' color='White' text='Время работы :   ПН-ВС с 14:00 до 00:00' />
        </div>
      </div>
    </Modal>
  )
});
