import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from '../src/components/label/label';

storiesOf('Label', module)
  .add('default', () => (
    <Label>Hello Button</Label>
  ));
