import React from 'react';
import Modal from '../ui/modal-component/modal';
export default {
    title: 'Dynamic React Components/Components/Modal',
    component: Modal,
};
const Template = (args) => (React.createElement(Modal, Object.assign({ "data-testid": "modal" }, args)));
const style = {
    width: '300px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
};
export const ModalStory = Template.bind({});
ModalStory.args = {
    isOpen: true,
    onClose: () => { },
    children: (React.createElement("div", { style: style },
        React.createElement("h1", null, "Modal"))),
};
//# sourceMappingURL=modal-component.stories.js.map