import React, {memo, useState} from "react";
import {Text} from "src/_components/text";
import time from "src/page/_components/hoo-content/_assets/work-time.svg";
import location from "src/page/_components/hoo-content/_assets/location.svg";
import {Field, Form} from "react-final-form";
import {ANCHORS} from "src/page/_components/_constants";
import axios from "axios";
import phone from "src/page/_components/hoo-content/_assets/phone.svg";
import callbackImage from "src/page/_components/hoo-content/_assets/footer-smoke.png";
import './index.scss'

export const Contacts = memo(() => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSendSuccess, setIsSendSuccess] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);
    const bodyParams = {
      values,
    };
    await axios
      .post(
        'https://vintnew.ru/sendMail', bodyParams
      )
      .then(response => {
        setIsSendSuccess(true);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="Contacts__wrapper" id={ANCHORS.contacts}>
      <div className="Contacts">
        <div className="Contacts__text-wrapper">
          <div className="Contacts__main-text">
            <Text size='h1-gagalin' color='White' text="Контакты"/>
          </div>
        </div>
        <div className="Contacts__content-wrapper">
          <div className="Contacts__content-information">
            <div className="Contacts__information">
              <div className="Contacts__information-img">
                <img
                  alt='HooClub'
                  className='Contacts__image'
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
          <div className="Contacts__content-order-form">
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                  <form className="Contacts__form" onSubmit={handleSubmit}>
                    <div className="Contacts__fields_wrapper">
                      <div className="Contacts__fields_name">
                        <label className="Contacts__fields_label" htmlFor="name"><Text size='h4-mobile' color='White' text='Имя'/></label>
                        <Field
                            name="name"
                            className="Contacts__field_name"
                            component="input"
                            type="text"
                            required
                        />
                      </div>
                      <div className="Contacts__fields_phone">
                        <label className="Contacts__fields_label" htmlFor="phone"><Text size='h4-mobile' color='White' text='Телефон'/></label>
                        <Field
                            name="phone"
                            className="Contacts__field_phone"
                            component="input"
                            type="text"
                        />
                      </div>
                    </div>
                    <div className="Contacts__button_wrapper">
                      <button className="Contacts__callback_button" disabled={isLoading} type="submit">
                        {!isLoading && (<Text size='h3' color="White" text='Обратный звонок' />)}
                        {isLoading && (
                          <div className="Contacts__lds_ring">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                          </div>
                        )}
                      </button>
                    </div>
                    <div className="Contacts__agreement">
                      <Text size='h4-mobile' color='White' text='Нажимая на кнопку, вы даете согласие на обработку своих персональных данных и соглашаетесь с политикой конфиденциальности'/>
                    </div>
                  </form>
              )}
            />
            <div className="Contacts__callback-image">
              <img
                alt='HooClub'
                className='Contacts__callback-img'
                // https://caniuse.com/?search=lazy%20loading%20attribute
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                loading="lazy"
                src={callbackImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
});
