import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem } from '@akturanilyas/ui';

const meta = {
  component: Timeline,
} satisfies Meta<typeof Timeline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render({ items }) {
    return <Timeline items={items} />;
  },
  args: {
    items: [
      {
        img: {
          src: 'https://akturanilyas.dev/_next/image?url=%2Fassets%2Fimg%2Fwingie-enuygun-logo.png&w=96&q=75',
          alt: 'alt',
          title: 'title',
        },
        color: 'bg-red-400',
        children: <div>children</div>,
      },
      {
        img: {
          src: 'https://akturanilyas.dev/_next/image?url=%2Fassets%2Fimg%2Fwingie-enuygun-logo.png&w=96&q=75',
          alt: 'alt',
          title: 'title',
        },
        color: 'bg-blue-400',
        children: <div>children</div>,
      },
      {
        img: {
          src: 'https://akturanilyas.dev/_next/image?url=%2Fassets%2Fimg%2Fwingie-enuygun-logo.png&w=96&q=75',
          alt: 'alt',
          title: 'title',
        },
        color: 'bg-green-400',
        children: <div>children</div>,
      },
      {
        img: {
          src: 'https://akturanilyas.dev/_next/image?url=%2Fassets%2Fimg%2Fwingie-enuygun-logo.png&w=96&q=75',
          alt: 'alt',
          title: 'title',
        },
        color: 'bg-yellow-400',
        children: (
          <TimelineItem title={'Title'} startDate={'2022-02-02'} subtitle={'Subtitle'}>
            <div>children</div>
          </TimelineItem>
        ),
      },
    ],
  },
  name: 'Timeline',
};
