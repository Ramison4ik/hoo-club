import React, { FC, memo } from 'react';

type PropsType = {
  onClick: () => void;
  style: Record<string, string>;
  className: string;
};

const RightButtonImg = memo(() => (
  <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1.5L8 8.5L1 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
));

export const RightSliderButton: FC<any> = memo(
  ({ onClick, style, className }: PropsType) => (
    <button
      className={className}
      onClick={onClick}
      // eslint-disable-next-line react/forbid-dom-props
      style={style}
      type="button"
    >
      <RightButtonImg/>
    </button>
  ),
);
