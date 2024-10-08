import * as React from 'react';

import type { Preview } from '@storybook/react';
import '../globals.css';
import '@akturanilyas/ui/styles.css';
import 'tailwindcss/tailwind.css';

global.React = React;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
