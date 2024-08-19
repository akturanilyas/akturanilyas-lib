import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@akturanilyas/ui';

const meta = {
  component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: ({ title, children }) => <Accordion title={title}>{children}</Accordion>,
  name: 'Accordion',
  args: {
    title: {
      text: 'Title',
    },
    children: 'Content',
  },
};
