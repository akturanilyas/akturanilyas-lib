import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@akturanilyas/ui';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: 'A versatile card component with multiple variants.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass'],
      description: 'The variant of the card',
    },
    title: {
      control: 'text',
      description: 'The title of the card',
    },
    description: {
      control: 'text',
      description: 'The description of the card',
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Card {...args}>Card</Card>,
  name: 'Default Card',
  args: {
    title: { text: 'Title' },
    description: { text: 'text' },
  },
  parameters: {
    docs: {
      description: {
        story: 'The default card variant.',
      },
    },
  },
};

export const Glass: Story = {
  render: (args) => <Card {...args}>Card</Card>,
  name: 'Glass Card',
  args: {
    variant: 'glass',
    title: { text: 'Glass' },
    description: { text: 'text' },
  },
  parameters: {
    docs: {
      description: {
        story: 'A card with a glass variant.',
      },
    },
  },
};
