"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const StyledOverlay_1 = __importDefault(require("./StyledOverlay"));
const modal_wrapper_1 = __importDefault(require("./modal-wrapper"));
const styled_components_1 = __importDefault(require("styled-components"));
const Modal = ({ isOpen, onClose, children, title, footer, withHeader = true, withFooter = false }) => {
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    react_1.default.useEffect(() => {
        setIsVisible(isOpen);
    }, [isOpen]);
    const handleClose = () => {
        setIsVisible(false);
        onClose();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, isVisible && (react_1.default.createElement(StyledOverlay_1.default, { onClick: handleClose },
        react_1.default.createElement(modal_wrapper_1.default, { onClick: (e) => e.stopPropagation(), "data-testid": "modal" },
            withHeader && react_1.default.createElement(ModalHeader, null,
                title && react_1.default.createElement(ModalTitle, null, title),
                react_1.default.createElement(ModalCloseButton, { onClick: handleClose }, "x")),
            react_1.default.createElement(ModalContent, null, children),
            footer && withFooter && react_1.default.createElement(ModalFooter, null, footer))))));
};
const ModalHeader = styled_components_1.default.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e8e8e8;
    padding: 10px;
`;
const ModalTitle = styled_components_1.default.h3 `
    margin: 0;
    font-size: 1.5rem;
    
`;
const ModalCloseButton = styled_components_1.default.button `
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0;
    color: #a3a3a3;
`;
const ModalContent = styled_components_1.default.div `
    padding: 20px;
`;
const ModalFooter = styled_components_1.default.div `
    border-top: 1px solid #e8e8e8;
    padding: 10px;
`;
exports.default = Modal;
//# sourceMappingURL=modal.js.map