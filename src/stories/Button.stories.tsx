import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Botones Redes Sociales',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Facebook = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Facebook.args = {
  size: 'small',
  label: 'facebook',
  backgroundColor:"#3b5998",
};

export const Flickr = Template.bind({});
Flickr.args = {
  size: 'small',
  label: 'flickr',
  backgroundColor:"#0063dc",
};

export const Twitter = Template.bind({});
Twitter.args = {
  size: 'small',
  label: 'twitter',
  backgroundColor:"#F5F8FA",
};

export const Youtube = Template.bind({});
Youtube.args = {
  size: 'small',
  label: 'youtube',
  backgroundColor:"#FF0000",
};


