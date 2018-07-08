import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from '../src/components/image/image';

storiesOf('Image', module)
  .add('default', () => (
    <Image>Hello Button</Image>
  ));
