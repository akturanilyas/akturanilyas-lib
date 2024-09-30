import type { Meta, StoryObj } from '@storybook/react';
import { Button, Header, Text } from '@akturanilyas/ui';
import { SiStorybook } from 'react-icons/si';

const meta = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {},
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Header {...args}>Header</Header>,
  name: 'Default Header',
  args: {
    items: [
      { title: 'Home', key: 'home' },
      { title: 'About', key: 'about', disabled: true },
      {
        title: 'Contact',
        key: 'contact',
        wip: true,
      },
    ],
    suffixItems: [
      {
        title: 'Home',
        key: 'home',
        component: (
          <Button
            className={`
          animate-gradient-animation flex-row 
          items-center gap-2 rounded-lg bg-gradient-to-r from-red-500 
          via-yellow-500 to-red-500 bg-[length:200%_200%]
          px-2 py-1 text-white
          `}
            onClick={() => alert('Hello!')}
          >
            <SiStorybook />
            <Text text='Storybook' />
          </Button>
        ),
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'The default card variant.',
      },
    },
  },
};
