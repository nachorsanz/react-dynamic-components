import React from 'react';
import { ReactNode } from 'react';
export type AccordionProps = {
    sections: {
        title: string;
        children: ReactNode;
    }[];
    wipComponent: boolean;
};
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
