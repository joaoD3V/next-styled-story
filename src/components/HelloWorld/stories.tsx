import { Meta, Story } from '@storybook/react';

import { HelloWorld } from './index';

export default {
  title: 'HelloWorld',
  component: HelloWorld,
} as Meta;

export const Basic: Story = (args) => <HelloWorld {...args} />;
