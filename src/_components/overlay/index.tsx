import React, {
  ComponentType,
  FC,
  memo,
  ReactNode,
  SyntheticEvent,
  PropsWithChildren,
  useEffect,
} from 'react';
import './index.scss';

type OverlayPropsType = {
  /** флаг меняющий свойство position с fixed на absolute */
  absolute?: boolean;
  /** содержимое компонента */
  children: FC | ComponentType | ReactNode;
  /** флаг включающий наследование backgroundColor родительского компонента */
  inherit?: boolean;
  /** прозрачность оверлея */
  opacity?: string;
  /** коллбек клика по оверлею */
  onClick?: (event: SyntheticEvent) => void;
  /** флаг открытого состояния */
  opened: boolean;
  /** время анимации показа оверлея */
  timeout?: number;
  position?: string;
  /** флаг меняющий backgroundColor на transparent */
  transparent?: boolean;
  withoutOverlay?: boolean;
  /** флаг меняющий backgroundColor на белый */
  whiteBackground?: boolean;
  /** скругление оверлея для кнопки */
  withBorderRadius?: boolean;
  /** флаг отключения анимации закрытия оверлея */
  isExitAnimationDisabled?: boolean;
}& PropsWithChildren<any>;

const DEFAULT_TIME_TO_SHOW_OVERLAY = 500;
const DEFAULT_OPACITY_VALUE = '0.5';

export const Overlay = memo(
  ({
     absolute,
     children,
     inherit,
     onClick = () => false,
     opacity = DEFAULT_OPACITY_VALUE,
     opened,
     position,
     withoutOverlay = false,
     timeout = DEFAULT_TIME_TO_SHOW_OVERLAY,
     transparent,
     whiteBackground,
     withBorderRadius,
     isExitAnimationDisabled,
   }: OverlayPropsType) => {
    useEffect(() => {
      document.documentElement.style.setProperty(
        '--overlay-animation-duration',
        `${timeout}ms`,
      );
      document.documentElement.style.setProperty('--overlay-opacity', opacity);
    }, [opacity, timeout]);

    return (
        <div
          className={'Overlay ' + 'Overlay__position_center'}
          onClick={onClick}
          role="presentation"
        >
          {children}
        </div>
    );
  },
);
