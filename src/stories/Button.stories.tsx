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
  children: 'Button',
  size: 'small',
  onClick: () => {},
  disabled: false,
  type: 'button',
  bgColor: 'red',
  border: '1px solid red',
  textColor: 'white',
  styles: {
    fontSize: '12px',
    padding: '5px 10px',
  }

};

