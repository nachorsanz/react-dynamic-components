import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  ReactDynamicButtons  from '../index';


export default {
  title: 'npm/component/React Dynamic Buttons',
  component: ReactDynamicButtons,
 
} as ComponentMeta<typeof ReactDynamicButtons>;

const Template: ComponentStory<typeof ReactDynamicButtons> = (args) => <ReactDynamicButtons {...args} />;
export const ReactDynamicButtonsStory = Template.bind({});

ReactDynamicButtonsStory.args = {
  text: 'Button',
  size: 'small',
  onClick: () => {},
  disabled: false,
  type: 'button',
  textColor: '#000',
  bgColor: "",
  styles: undefined
};

