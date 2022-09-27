import React, { memo, useCallback, useEffect, useRef, ReactNode } from 'react';
import { Portal } from '../portal';
import { KEY_CODES } from './_constatns';
import { ModalView } from './_components/modal-view';
import {Overlay} from "src/_components/overlay";
import {
  ActionsConfigType,
  SizeType,
  TitleSizeType,
  VariantType,
} from './types';

type PropsType = {
  /** объекты с props для кнопок модального окна */
  actionsConfig?: ActionsConfigType;
  /** содержимое модального окна */
  children?: ReactNode;
  /** флаг отключающий закрытие при клике по оверлею */
  disableOverlayClick?: boolean;
  /** флаг раскрытия на всю высоту и ширину */
  isFullScreen?: boolean;
  /** флаг наличия иконки закрытия */
  isShowCloseIcon?: boolean;
  /** флаг открытия модального окна */
  isOpened: boolean;
  /** флаг прозрачного оверлея */
  isTransparent?: boolean;
  /** флаг убирающий внутреннии отступы */
  noPadding?: boolean;
  /** колбэк закрытия срабатывает при клике на иконку закрытия */
  onClose: () => void;
  /** заголовок модального окна */
  title?: string;
  /** размер заголовка */
  titleSize?: TitleSizeType;
  withoutOverlay?: boolean;
  position?: string;
  /** флаг отключения анимации закрытия оверлея */
  isExitAnimationDisabled?: boolean;
  /** ширина модального окна */
  size?: SizeType;
  /** вариант размещения на экране */
  variant?: VariantType;
  /** флаг темной темы */
  isDarkTheme?: boolean;
};

export const Modal = memo(
  ({
     actionsConfig,
     children,
     disableOverlayClick,
     isDarkTheme,
     isExitAnimationDisabled,
     isFullScreen,
     isOpened,
     isShowCloseIcon,
     isTransparent,
     noPadding,
     onClose = () => false,
     withoutOverlay = false,
     position = "center",
     size = 's',
     title,
     titleSize = 'h1',
   }: PropsType) => {
    const modalRef = useRef<HTMLDivElement>(null);

    const handleOverlayClick = useCallback(
      ({ target }) => {
        if (
          modalRef.current &&
          !modalRef.current.contains(target) &&
          !disableOverlayClick
        ) {
          onClose();
        }
      },
      [disableOverlayClick, onClose],
    );

    const handleDocumentKeyDown = useCallback(
      ({ keyCode }) => {
        if (keyCode === KEY_CODES.ESCAPE) {
          onClose();
        }
      },
      [onClose],
    );

    useEffect(() => {
      document.addEventListener('keydown', handleDocumentKeyDown);

      return () => {
        document.removeEventListener('keydown', handleDocumentKeyDown);
      };
    }, []); // eslint-disable-line
    return (
      <Portal data-name="Modal" prefix="modal" zIndex={90}>
        <Overlay
          isExitAnimationDisabled={isExitAnimationDisabled}
          onClick={handleOverlayClick}
          opened={isOpened}
          position={position}
          timeout={150}
          withoutOverlay
          transparent={isTransparent}
        >
        <ModalView
            actionsConfig={actionsConfig}
            isDarkTheme={isDarkTheme}
            isFullScreen={isFullScreen}
            isShowCloseIcon={isShowCloseIcon}
            modalRef={modalRef}
            noPadding={noPadding}
            onClose={onClose}
            position={position}
            size={size}
            title={title}
            titleSize={titleSize}
          >
            {children}
          </ModalView>
        </Overlay>
      </Portal>
    );
  },
);
