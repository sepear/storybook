import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Socialmedia  from './Socialmedia';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Socialmedia',
  component: Socialmedia,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Socialmedia>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Socialmedia> = (args) => <Socialmedia {...args} />;

export const SocialMedia = Template.bind({});

