import React from 'react';
import Icon from '../application/features/icon-component/icon';
import { getAllColorIcons, getAllFAIcons } from '../domain/services/icons';
export default {
    title: 'Dynamic React Components/Components/Icon',
    component: Icon,
    argTypes: {
        faIcon: {
            control: {
                type: 'select',
                options: getAllFAIcons(),
            },
        },
        fcIcon: {
            control: {
                type: 'select',
                options: getAllColorIcons(),
            },
        },
        color: {
            control: {
                type: 'color',
            },
        },
        size: {
            control: {
                type: 'text',
            },
        },
    },
};
const Template = (args) => (React.createElement(Icon, Object.assign({ "data-testid": "icon" }, args)));
export const IconStory = Template.bind({});
IconStory.args = {
    faIcon: 'FaHome',
    fcIcon: undefined,
    color: '#000000',
    size: '1rem',
    styles: {},
    className: '',
};
//# sourceMappingURL=icon-component.stories.js.map