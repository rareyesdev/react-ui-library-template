import { configure } from '@storybook/react';

const r = require.context('../stories', true, /\.*\.js$/)

function loadStories() {
  r.keys().forEach((filename) => r(filename))
}

configure(loadStories, module);
