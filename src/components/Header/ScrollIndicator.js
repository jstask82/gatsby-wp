import React from 'react';
import css from './ScrollIndicator.module.scss';

export default function ScrollIndicator({ indicatorWidthStyle }) {
  return <div className={css['scroll-indicator']} style={indicatorWidthStyle}></div>;
}
