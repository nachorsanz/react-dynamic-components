import React from 'react';
import Input from "../ui/input/input";
export default {
<<<<<<< HEAD
<<<<<<< HEAD

    title: "Dynamic React Components/Components/Input",

=======
    title: "React Dynamic Components/Components/Input",
>>>>>>> 64ff9cb (chore: update npm)
=======
    title: "Dynamic React Components/Components/Input",
>>>>>>> 7ac2adc (chore: prepare main)
    component: Input,
    argTypes: {
        placeholder: {
            control: {
                type: "text",
            },
        },
    },
};
const Template = (args) => React.createElement(Input, Object.assign({ "data-testid": "input" }, args));
export const InputStory = Template.bind({});
InputStory.args = {
    placeholder: "Placeholder",
    styles: {},
    className: "",
    onChange: () => { },
    disabled: false,
    value: "",
    type: "text",
    name: "",
    id: "",
    withShadow: false,
    hover: false,
};
//# sourceMappingURL=input-component.stories.js.map