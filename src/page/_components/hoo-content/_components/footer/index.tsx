import React, { memo } from "react";
import logo from "src/page/_components/hoo-content/_assets/footer-logo.svg";
import vk from "src/page/_components/hoo-content/_assets/vk.svg";
import insta from "src/page/_components/hoo-content/_assets/insta.svg";
import telegram from "src/page/_components/hoo-content/_assets/Telegram.svg";
import './index.scss'

export const Footer = memo(() => {

  return (
    <div className="Footer__wrapper">
      <div className="Footer">
        <img
          alt='HooClub'
          className='Footer__logo'
          // https://caniuse.com/?search=lazy%20loading%20attribute
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          loading="lazy"
          src={logo}
        />
        <a href="https://vk.com/id751246017" target="_blank" >
          <img
            alt='HooClub'
            className='Footer__vk-logo'
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
            className='Footer__insta-logo'
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
              className='Footer__telegram-logo'
            // https://caniuse.com/?search=lazy%20loading%20attribute
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
              loading="lazy"
              src={telegram}
          />
        </a>
      </div>
    </div>
  )
});
