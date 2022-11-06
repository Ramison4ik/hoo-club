import React, { memo, ReactNode, RefObject } from 'react';
import './index.scss';
import {CloseIcon} from "src/_components/close-icon";
import {Text} from "src/_components/text";

type Props = {
  /** объекты с props для кнопок модального окна */
  actionsConfig?: any;
  /** содержимое модального окна */
  children?: ReactNode;
  /** флаг раскрытия на всю высоту и ширину */
  isFullScreen?: boolean;
  /** флаг наличия иконки закрытия */
  isShowCloseIcon?: boolean;
  /** объект для получения ref компонента */
  modalRef: RefObject<HTMLDivElement>;
  /** флаг убирающий внутреннии отступы */
  noPadding?: boolean;
  /** колбэк закрытия срабатывает при клике на иконку закрытия */
  onClose?: () => void;
  /** ширина модального окна */
  size: any;
  /** заголовок модального окна */
  title?: string;
  position?: string,
  /** размер заголовка */
  titleSize: any;
  /** вариант размещения на экране */
  variant?: any;
  /** флаг темной темы */
  isDarkTheme?: boolean;
};
export const ModalView = memo(
  ({
     actionsConfig: { actionButton, cancelButton } = {},
     children,
     isDarkTheme,
     isFullScreen,
     position,
     isShowCloseIcon,
     modalRef,
     noPadding,
     onClose,
     size,
     title,
   }: Props) => {
    const fullScreen = isFullScreen ? 'Modal--full' : 'Modal--m';
    return (
      <div
        ref={modalRef}
        className={'Modal ' + 'Modal__center ' + `${fullScreen}`}
        role="presentation"
      >
        {Boolean(title) && (
          <div className={'Modal__title'}>
            <Text size='h2' color='White' text={title}/>
          </div>
        )}
        {isShowCloseIcon && (
          <div className={'Modal__close-button'}>
            <div
              onClick={onClose}
              role="button"
              tabIndex={1}
            >
              {CloseIcon()}
            </div>
          </div>
        )}
        <div
          className={'Modal__content'}
        >
          {children}
        </div>
      </div>
    );
  },
);
