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
      text: 'Accordion Title',
    },
    children: (
      <span>
        This is the content of the Accordion component. It can contain multiple lines of text, providing detailed
        information or instructions. The content can be as long as needed to convey the necessary information to the
        user.
      </span>
    ),
  },
};
