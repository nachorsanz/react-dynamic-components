import React, { useState } from 'react'
import { SelectProps } from '../../domain/types'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import StyledSelect from './StyledSelect'
import StyledSelectList from './StyledSelectList'
import StyledSelectItem from './StyledSelectItem'
import StyledSelectWrapper from './StyledSelectWrapper'

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

    const [showDropdown, setShowDropdown] = useState(false)
    const [currentSelectValue, setCurrentSelectValue] =
        useState('')

    const handleDropdown = () => {
        setShowDropdown(!showDropdown)
    }

    const handleSelect = (value) => {
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
            <StyledSelect onClick={handleDropdown}>
                <span data-testid="select-placeholder">
                    {currentSelectValue === '' ? selectPlaceHolder : currentSelectValue}
                </span>
                {showDropdown ? <FaArrowUp /> : <FaArrowDown />}
            </StyledSelect>
            {showDropdown && (
                <StyledSelectList data-testid="select-list-content">
                    {!shouldHaveValue && (
                        <StyledSelectItem
                            data-testid="select-item"
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
                            key={content.key}
                            onClick={() => handleSelect(content.value)}
                        >
                            {content.key}
                        </StyledSelectItem>
                    ))}
                </StyledSelectList>
            )}
        </StyledSelectWrapper>
    )
}

export default SelectComponent
