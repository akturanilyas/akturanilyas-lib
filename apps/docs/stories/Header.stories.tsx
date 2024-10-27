import type { Meta, StoryObj } from '@storybook/react';
import { Button, Div, Header, HeaderProps, Text } from '@akturanilyas/ui';
import { SiStorybook } from 'react-icons/si';

const meta: Meta<HeaderProps> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    docs: {
      description: {
        component:
          'The `Header` component is used to display a header with navigation items and optional suffix items.',
      },
    },
  },
  argTypes: {
    items: {
      description: 'Array of navigation items to be displayed in the header.',
      control: { type: 'object' },
    },
    suffixItems: {
      description: 'Array of suffix items to be displayed at the end of the header.',
      control: { type: 'object' },
    },
    className: {
      description: 'Additional CSS classes to apply to the header.',
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<HeaderProps>;

const HeaderExample = (args: HeaderProps) => (
  <Div className={'max-h-64 w-full overflow-y-auto'}>
    <Div>
      <Header {...args} />
      <span>Example content below the header...</span>
      <Div className={'flex-row flex-wrap'}>
        <Div className='h-32 w-1/2 bg-red-500 text-white'>Red</Div>
        <Div className='h-32 w-1/2 bg-blue-500 text-white'>Blue</Div>
        <Div className='h-32 w-1/2 bg-green-500 text-white'>Green</Div>
        <Div className='h-32 w-1/2 bg-yellow-500 text-white'>Yellow</Div>
        <Div className='h-32 w-1/2 bg-purple-500 text-white'>Purple</Div>
        <Div className='h-32 w-1/2 bg-pink-500 text-white'>Pink</Div>
        <Div className='h-32 w-1/2 bg-orange-500 text-white'>Orange</Div>
        <Div className='h-32 w-1/2 bg-teal-500 text-white'>Teal</Div>
      </Div>
    </Div>
  </Div>
);

export const Default: Story = {
  render(args) {
    return <HeaderExample {...args} />;
  },
  name: 'Default Header',
  args: {
    items: [
      { title: 'Home', key: 'home', href: '/test' },
      { title: 'About', key: 'about', disabled: true },
      { title: 'Contact', key: 'contact', wip: true },
    ],
    suffixItems: [
      {
        title: 'Storybook',
        key: 'storybook',
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
        story: 'The default variant of the `Header` component with example items and suffix items.',
      },
    },
  },
};
