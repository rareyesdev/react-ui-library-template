import React from 'react';
import classNames from 'classnames/bind';

import styles from './label.css';

const cx = classNames.bind(styles);

class Label extends React.Component {
  render () {
    return (
      <span className={cx('component')}>This is a label</span>
    );
  }
}

export default Label;
