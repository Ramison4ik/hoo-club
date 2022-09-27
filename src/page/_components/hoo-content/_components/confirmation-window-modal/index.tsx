import React, {memo} from "react";
import {Modal} from "src/_components/modal";
import {Text} from "src/_components/text";
import './index.scss'

type PropsType = {
  onSubmit: () => void;
  isModalOpened: boolean;
};

export const ConfirmationWindowModal = memo(({isModalOpened, onSubmit}:PropsType) => {
  const handleCloseModal = () => {
    console.log('YES')
    window.close();
  };

  return (
    <Modal title='' position="left" withoutOverlay size="xl" isOpened={isModalOpened} onClose={handleCloseModal}>
      <div className="ConfirmationWindowModal__content">
        <div className="ConfirmationWindowModal__title-text">
          <Text size='h1-mobile' color='White' text='Просмотр данного сайта разрешен только лицам, достигшим возраста 18 лет'/>
        </div>
        <div className="ConfirmationWindowModal__access-text">
          <Text size='h3' color='White' text='Нажав на кнопку “Подтверждаю”, вы подтверждаете, что Вам исполнилось 18 лет.'/>
        </div>
        <div tabIndex={0} role='button' onClick={onSubmit} className="ConfirmationWindowModal__access-button">
          <Text size='h3' color='White' text='Подтверждаю'/>
        </div>
      </div>
    </Modal>
  )
});
