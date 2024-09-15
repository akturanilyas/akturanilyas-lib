import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@akturanilyas/ui';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Card title={{ text: 'Title' }} description={{ text: 'text' }}>Card</Card>,
  name: 'Card',
};

export const Glass: Story = {
  render: () => <Card variant={'glass'} title={{ text: 'Glass' }} description={{ text: 'text' }}>Card</Card>,
  name: 'Card',
};
