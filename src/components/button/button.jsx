import React from 'react';
import classNames from 'classnames/bind';

import styles from './button.css';

const cx = classNames.bind(styles);

class Button extends React.Component {
  handleClick = () => {
    console.log('Click!');
    // throw new Error('ups');
    alert('Click!');
  };

  render() {
    const { children, onClick } = this.props;
    return (
      <button className={cx('component')} onClick={onClick || this.handleClick}>
        { children }
      </button>
    );
  }
}

export default Button;
