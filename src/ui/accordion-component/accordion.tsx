import React from 'react'
import { ReactNode, useState } from 'react'
import { FaChevronDown, FaChevronRight } from 'react-icons/fa'
import StyledAccordionSection from './StyledAccordionSection'
import StyledAccordionWrapper from './StyledAccordionWrapper'
import StyledAccordionDropdown from './StyledAccordionDropdown'

export type AccordionProps = {
    sections: {
        title: string
        children: ReactNode
    }[]
    wipComponent: boolean
}

const Accordion: React.FC<AccordionProps> = ({ sections, wipComponent }) => {
    const [clicked, setClicked] = useState<number | null>(null)

    const toggle = (index: number) => {
        if (clicked === index) {
            return setClicked(null)
        }
        setClicked(index)
    }

    return wipComponent ? (
        <div>WIP Component</div>
    ) : (
        <StyledAccordionSection>
            {sections.map((item, index) => {
                return (
                    <>
                        <StyledAccordionWrapper
                            onClick={() => toggle(index)}
                            key={index}
                        >
                            <span>{item.title}</span>
                            <span>
                                {clicked === index ? (
                                    <FaChevronDown />
                                ) : (
                                    <FaChevronRight />
                                )}
                            </span>
                        </StyledAccordionWrapper>
                        {clicked === index ? (
                            <StyledAccordionDropdown>
                                {item.children}
                            </StyledAccordionDropdown>
                        ) : null}
                    </>
                )
            })}
        </StyledAccordionSection>
    )
}

export default Accordion
