import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@akturanilyas/ui';
import { FaBeer } from 'react-icons/fa';

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Button>Button</Button>,
  name: 'Button',
};

export const TextButton: Story = {
  render: () => <Button variant={'text'}>Button</Button>,
  name: 'Text Button',
};

export const Outlined: Story = {
  render: () => <Button variant={'outlined'}>Button</Button>,
  name: 'Outlined Button',
};

export const Icon: Story = {
  render: () => <Button icon={<FaBeer />}>Button</Button>,
  name: 'Icon Button',
};
