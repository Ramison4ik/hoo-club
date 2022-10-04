import React, { memo, SyntheticEvent, useState } from "react";
import {Logo} from "src/page/_components/hoo-header/_components/logo";
import {Text} from 'src/_components/text';
import {Instagram} from "src/page/_components/hoo-header/_components/instagram";
import {MENU_ITEMS} from "src/page/_components/hoo-header/_constants";
import {Vk} from "src/page/_components/hoo-header/_components/vk";
import {pageNavigate} from "src/page/_components/hoo-header/_utils/handleNavigate";
import {Telegram} from "src/page/_components/hoo-header/_components/telegram";
import {ModalOrder} from "src/page/_components/hoo-content/_components/modal-order";
import './index.scss'

type PropsType = { onClick?: () => void };

export const HooHeader = memo(({onClick}:PropsType) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const handleNavigate = (event: SyntheticEvent<HTMLAnchorElement>) => {
    pageNavigate(event);
    if (onClick) {
      onClick();
    }
  };
  const handleCloseModal = () => {
    setIsModalOpened(false)
  };

  const handleOrderModal = () => {
    setIsModalOpened(true)
  };

  const handleLogoClick = () => {
    window.location.reload()
  };

  return (
    <div className="HooHeader">
      <div tabIndex={0} role='button' onClick={handleLogoClick} className="HooHeader__logo">
        <Logo/>
      </div>
      <div className="HooHeader__menu">
        <ul className="HooHeader__menu-list-wrapper">
          {MENU_ITEMS.map(({id, text, link}) => (
            <li key={id} className="HooHeader__menu-list">
              <a onClick={handleNavigate} href={link} className="HooHeader__menu-list-link">
                <Text color='White' size='h3-mobile' text={text}/>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="HooHeader__order-button-wrapper">
        <button onClick={handleOrderModal} className='HooHeader__order-button'>
          <Text color='White' size='h3-mobile' text="Заказать звонок"/>
        </button>
      </div>
      <div className="HooHeader__social-networks">
        <a href="https://instagram.com/hoo.club_moscow?igshid=YzA2ZDJiZGQ=" target="_blank" className="HooHeader__instagram">
          <Instagram/>
        </a>
        <a href="https://vk.com/id751246017" target="_blank" className="HooHeader__vk">
          <Vk/>
        </a>
        <a href="https://t.me/HooClubb" target="_blank" className="HooHeader__vk">
          <Telegram/>
        </a>
      </div>
      {isModalOpened&&(
        <ModalOrder isModalOpened={isModalOpened} onCloseModal={handleCloseModal}  title='Закажите обратный звонок!'/>
      )}
    </div>
  );
});
