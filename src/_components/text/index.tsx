import React, { memo } from 'react';
import classnames from 'classnames/bind';
import styles from './index.module.scss';

const cn = classnames.bind(styles);

type PropsType = {
  text?: string;
  size: FontSizeType;
  color: FontColorType;
  isBold?: boolean;
  isCentered?: boolean;
  isUpperCase?: boolean;
  classname?: string;
};

export type FontSizeType =
  | 'h0'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h1-gagalin'
  | 'h2-gagalin'
  | 'h3-gagalin'
  | 'h1-mobile'
  | 'h2-mobile'
  | 'h2-bold'
  | 'h3-mobile'
  | 'h4-mobile'
  | 'h5-mobile';
export type FontColorType =
  | 'Black'
  | 'White'
  | 'Yellow'
  | 'Purple'

export const Text = memo(
  ({
    text,
    size,
    color,
    isBold,
    isCentered,
    isUpperCase,
    classname,
  }: PropsType) => (
    <span
      className={cn('text', {
        [`size-${size}`]: Boolean(size),
        [`color-${color}`]: Boolean(color),
        isBold,
        isCentered,
        isUpperCase,
        [classname]: Boolean(classname),
      })}
    >
      {text}
    </span>
  ),
);
