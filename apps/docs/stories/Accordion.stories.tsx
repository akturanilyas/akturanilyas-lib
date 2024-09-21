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

export const Glass: Story = {
  render: ({ title, children }) => (
    <div className='rounded-md bg-red-800 p-4 shadow-md'>
      <Accordion variant={'glass'} title={title} defaultValue={true}>
        {children}
      </Accordion>
    </div>
  ),
  name: 'Glass',
  args: {
    title: {
      text: 'Title',
    },
    children: 'Content',
  },
};
