import React from 'react';
import Modal from '../ui/modal-component/modal';
export default {
    title: 'Dynamic React Components/Components/Modal',
    component: Modal,
};
const Template = (args) => React.createElement(Modal, Object.assign({ "data-testid": "modal" }, args));
export const ModalStory = Template.bind({});
ModalStory.args = {
    children: 'Modal',
};
//# sourceMappingURL=modal-component.stories.js.map