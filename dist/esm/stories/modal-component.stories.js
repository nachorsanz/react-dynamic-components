import React from 'react';
import Modal from '../application/features/modal-component/modal';
export default {
    title: 'Dynamic React Components/Components/Modal',
    component: Modal,
};
const Template = (args) => (React.createElement(Modal, Object.assign({ "data-testid": "modal" }, args)));
const style = {
    width: '500px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
};
const buttonStyle = {
    width: '100px',
    height: '30px',
    fontWeight: 'bold',
    backgroundColor: '#00aeff',
    color: '#fff',
    border: '1px solid #fff',
    cursor: 'pointer',
};
const footerStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '15px'
};
export const ModalStory = Template.bind({});
ModalStory.args = {
    isOpen: true,
    onClose: () => { },
    children: (React.createElement("div", { style: style },
        React.createElement("h1", null, "Modal"))),
    title: 'Modal',
    footer: (React.createElement("div", { style: footerStyle },
        React.createElement("button", { style: buttonStyle }, "Cerrar"),
        React.createElement("button", { style: buttonStyle }, "Aceptar"))),
    withHeader: true,
    withFooter: true,
};
//# sourceMappingURL=modal-component.stories.js.map