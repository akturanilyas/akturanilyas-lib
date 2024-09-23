import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@akturanilyas/ui';
import { FaBeer } from 'react-icons/fa';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'A versatile button component with multiple variants and an optional icon.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'text', 'outlined', 'icon'],
      description: 'The variant of the button',
    },
    icon: {
      control: 'boolean',
      description: 'Whether to show an icon',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  name: 'Default Button',
  args: {
    icon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'The default button variant.',
      },
    },
  },
};

export const TextButton: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  name: 'Text Button',
  args: {
    variant: 'text',
    icon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with no background, just text.',
      },
    },
  },
};

export const Outlined: Story = {
  render: (args) => <Button {...args}>Button</Button>,
  name: 'Outlined Button',
  args: {
    variant: 'outlined',
    icon: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with an outlined border.',
      },
    },
  },
};

export const Icon: Story = {
  render: (args) => (
    <Button {...args} icon={args.icon}>
      Button
    </Button>
  ),
  name: 'Icon Button',
  args: {
    variant: 'icon',
    icon: <FaBeer />,
  },
  parameters: {
    docs: {
      description: {
        story: 'A button with an icon.',
      },
    },
  },
};
