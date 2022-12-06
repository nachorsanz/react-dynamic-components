import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  ReactDynamicButtons  from '../index';
import { getAllIcons } from '../icons';


export default {
  title: 'React Dynamic Buttons/Components/Button',
  component: ReactDynamicButtons,
 
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: getAllIcons(),
      },
    },
    iconPosition: {
      control: {
        type: 'radio',
        options: ['left', 'right', 'none'],
      },
    },
    size: {
      control: {
      type: 'radio',
      options: ['small', 'medium', 'large'],
      }
     
    },
    variant: {
      control: {
      type: 'radio',
      options: [ "primary" , "secondary" , "tertiary" , "danger" , "success" , "warning" , "info" , "light" , "dark" , "link", "none"],
      }
    },
    option: {
      control: {
      type: 'radio',
      options: ["submit", "reset", "button"],
      }
    },
   
    
  }
 
} as ComponentMeta<typeof ReactDynamicButtons>;



const Template: ComponentStory<typeof ReactDynamicButtons> = (args) => <ReactDynamicButtons {...args} />;
export const ReactDynamicButtonsStory = Template.bind({});

ReactDynamicButtonsStory.args = {
  text: 'Button',
  size: "medium",
  onClick: () => {},
  disabled: false,
  option: "submit",
  textColor: '',
  bgColor: "",
  styles: undefined,
  variant: "primary",
  icon: null,

};

