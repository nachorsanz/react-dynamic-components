import React, { useState } from 'react'
import { SelectProps } from '../../../domain/models/types'
import { FaChevronRight } from 'react-icons/fa'
import StyledSelect from './StyledSelect'
import StyledSelectList from './StyledSelectList'
import StyledSelectItem from './StyledSelectItem'
import StyledSelectWrapper from './StyledSelectWrapper'
import StyledChevron from './StyledChevron'

const SelectComponent: React.FC<SelectProps> = ({ ...props }) => {
    const {
        selectContent,
        className,
        styles,
        selectPlaceHolder,
        id,
        shouldHaveValue,
        setValue,
    } = props

    const [showDropdown, setShowDropdown] = useState<boolean | null>(false)
    const [currentSelectValue, setCurrentSelectValue] = useState<string | null>(
        ''
    )

    const handleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleSelect = (value: string) => {
        setCurrentSelectValue(value)
        setShowDropdown(!showDropdown)
        setValue && setValue(value)
    }

    return (
        <StyledSelectWrapper
            style={styles}
            className={className}
            id={id}
            data-testid="select"
        >
            <StyledSelect
                onClick={handleDropdown}
                textColor={props.textColor}
                backgroundColor={props.backgroundColor}
            >
                <span data-testid="select-placeholder">
                    {currentSelectValue === ''
                        ? selectPlaceHolder
                        : currentSelectValue}
                </span>
                <StyledChevron drowpdownActive={showDropdown}>
                    <FaChevronRight />
                </StyledChevron>
            </StyledSelect>
            {showDropdown && (
                <StyledSelectList
                    data-testid="select-list-content"
                    textColor={props.textColor}
                    backgroundColor={props.backgroundColor}
                >
                    {!shouldHaveValue && (
                        <StyledSelectItem
                            data-testid="select-item"
                            itemListHoverColor={props.itemListHoverColor}
                            onClick={() => {
                                setCurrentSelectValue('')
                                setShowDropdown(false)
                            }}
                        >
                            {selectPlaceHolder}
                        </StyledSelectItem>
                    )}
                    {selectContent.map((content) => (
                        <StyledSelectItem
                            data-testid="select-item"
                            itemListHoverColor={props.itemListHoverColor}
                            key={content.key}
                            onClick={() => handleSelect(content.value)}
                        >
                            <span key={content.key}>{content.key}</span>
                        </StyledSelectItem>
                    ))}
                </StyledSelectList>
            )}
        </StyledSelectWrapper>
    )
}

export default SelectComponent
