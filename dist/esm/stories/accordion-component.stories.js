import React from 'react';
import Accordion from '../ui/accordion-component/accordion';
export default {
    title: 'Dynamic React Components/Components/Accordion',
    component: Accordion,
    argTypes: {
        wipComponent: {
            control: {
                type: 'boolean',
            },
        },
    },
};
const Template = (args) => (React.createElement(Accordion, Object.assign({ "data-testid": "accordion" }, args)));
export const AccordionStory = Template.bind({});
AccordionStory.args = {
    sections: [
        {
            title: 'Section 1',
            children: React.createElement("p", null, "Section 1 content"),
        },
        {
            title: 'Section 2',
            children: React.createElement("p", null, "Section 2 content"),
        },
        {
            title: 'Section 3',
            children: React.createElement("p", null, "Section 3 content"),
        },
    ],
    wipComponent: true,
};
//# sourceMappingURL=accordion-component.stories.js.map