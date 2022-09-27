import React, { memo } from "react";
import youngMan from "src/page/_components/hoo-content/_assets/young-man.jpg";
import aboutUsSmoke from "src/page/_components/hoo-content/_assets/about-us-smoke.svg";
import {Text} from "src/_components/text";
import {ANCHORS} from "src/page/_components/_constants";
import './index.scss'

export const AboutUs = memo(() => {
  return (
    <div className="AboutUs__wrapper" id={ANCHORS.about}>
      <div className="AboutUs__image">
        <img
          alt='HooClub'
          className='AboutUs__main-image'
          // https://caniuse.com/?search=lazy%20loading%20attribute
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          loading="lazy"
          src={youngMan}
        />
        <img
          alt='HooClub'
          className='AboutUs__about-us-smoke'
          // https://caniuse.com/?search=lazy%20loading%20attribute
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          loading="lazy"
          src={aboutUsSmoke}
        />
      </div>
      <div className="AboutUs__text-wrapper">
        <div className="AboutUs__title">
          <Text size="h0" color='White' text='О нас'/>
        </div>
        <div className="AboutUs__main-text">
          <Text size="h3-mobile" color='White' text='В команде HooClub работают только профессиональные кальянные мастера с огромным опытом работы. В нашем арсенале качественные кальяны мировых известных брендов, а также  табак самых разных видов и вкусов. Учитываем каждый нюанс и все предпочтения. В кальянном меню предоставлены лучшие миксы вкусов.'/>
        </div>
        <div className="AboutUs__second-main-text">
          <Text size="h3-mobile" color='White' text='Вы можете заказать доставку сразу нескольких кальянов с выбором разных табаков в сопровождении опытных кальянщиков или без них. Мы приезжаем в заранее согласованное с Вами время и готовим всё необходимое к началу вашего праздника. Вам и вашим гостям не придется ждать!'/>
        </div>
      </div>
    </div>
  )
});
