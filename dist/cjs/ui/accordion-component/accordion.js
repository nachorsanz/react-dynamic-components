"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const fa_1 = require("react-icons/fa");
const StyledAccordionSection_1 = __importDefault(require("./StyledAccordionSection"));
const StyledAccordionWrapper_1 = __importDefault(require("./StyledAccordionWrapper"));
const StyledAccordionDropdown_1 = __importDefault(require("./StyledAccordionDropdown"));
const Accordion = ({ sections, wipComponent }) => {
    const [clicked, setClicked] = (0, react_2.useState)(null);
    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };
    return wipComponent ? (react_1.default.createElement("div", null, "WIP Component")) : (react_1.default.createElement(StyledAccordionSection_1.default, null, sections.map((item, index) => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(StyledAccordionWrapper_1.default, { onClick: () => toggle(index), key: index },
                react_1.default.createElement("span", null, item.title),
                react_1.default.createElement("span", null, clicked === index ? (react_1.default.createElement(fa_1.FaChevronDown, null)) : (react_1.default.createElement(fa_1.FaChevronRight, null)))),
            clicked === index ? (react_1.default.createElement(StyledAccordionDropdown_1.default, null, item.children)) : null));
    })));
};
exports.default = Accordion;
//# sourceMappingURL=accordion.js.map