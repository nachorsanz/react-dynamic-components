import React from 'react';
import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import StyledAccordionSection from './StyledAccordionSection';
import StyledAccordionWrapper from './StyledAccordionWrapper';
import StyledAccordionDropdown from './StyledAccordionDropdown';
const Accordion = ({ sections, wipComponent }) => {
    const [clicked, setClicked] = useState(null);
    const toggle = (index) => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    };
    return wipComponent ? (React.createElement("div", null, "WIP Component")) : (React.createElement(StyledAccordionSection, null, sections.map((item, index) => {
        return (React.createElement(React.Fragment, null,
            React.createElement(StyledAccordionWrapper, { onClick: () => toggle(index), key: index },
                React.createElement("span", null, item.title),
                React.createElement("span", null, clicked === index ? (React.createElement(FaChevronDown, null)) : (React.createElement(FaChevronRight, null)))),
            clicked === index ? (React.createElement(StyledAccordionDropdown, null, item.children)) : null));
    })));
};
export default Accordion;
//# sourceMappingURL=accordion.js.map