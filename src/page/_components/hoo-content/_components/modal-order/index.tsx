import React, {memo, useState} from "react";
import {Modal} from "src/_components/modal";
import {Field, Form} from "react-final-form";
import {Text} from "src/_components/text";
import './index.scss'
import axios from "axios";

type PropsType = {
  onCloseModal: () => void;
  isModalOpened: boolean;
  title: string;
};

export const ModalOrder = memo(({onCloseModal, isModalOpened, title}:PropsType) => {
  const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };
  return (
    <Modal title={title} position="left" withoutOverlay isShowCloseIcon size="xl" isOpened={isModalOpened} onClose={onCloseModal}>
      <div className="ModalOrder__content-order-form">
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form className="ModalOrder__form" onSubmit={handleSubmit}>
              <div className="ModalOrder__fields_wrapper">
                <div className="ModalOrder__fields_name">
                  <label className="ModalOrder__fields_label" htmlFor="name"><Text size='h4-mobile' color='White' text='Имя'/></label>
                  <Field
                    name="name"
                    className="ModalOrder__field_name"
                    component="input"
                    type="text"
                    required
                  />
                </div>
                <div className="ModalOrder__fields_phone">
                  <label className="ModalOrder__fields_label" htmlFor="phone"><Text size='h4-mobile' color='White' text='Телефон'/></label>
                  <Field
                    name="phone"
                    className="ModalOrder__field_phone"
                    component="input"
                    type="text"
                  />
                </div>
              </div>
              <div className="ModalOrder__button_wrapper">
                <button className="ModalOrder__callback_button" disabled={isLoading} type="submit">
                  {!isLoading && (<Text size='h3' color="White" text='Обратный звонок' />)}
                  {isLoading && (
                    <div className="ModalOrder__lds_ring">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  )}
                </button>
              </div>
              <div className="ModalOrder__agreement">
                <Text size='h4-mobile' color='White' text='Нажимая на кнопку, вы даете согласие на обработку своих персональных данных и соглашаетесь с политикой конфиденциальности'/>
              </div>
            </form>
          )}
        />
      </div>
    </Modal>
  )
});
