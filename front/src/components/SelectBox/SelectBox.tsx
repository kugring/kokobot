import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { MdArrowDropDown } from "react-icons/md";

interface SelectBoxProps {
  options: any[];
  unit?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const SelectBox = ({
  unit,
  options,
  placeholder,
  defaultValue,
  onChange,
}: SelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue || options[0]);
  const selectRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange && onChange(option);
  };

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <SelectContainer ref={selectRef}>
      <SelectHeader onClick={toggleDropdown}>
        <Label>
          {placeholder ? placeholder : `${selectedOption}${unit}`}
        </Label>
        <IconWrapper isOpen={isOpen}>
          <MdArrowDropDown color={"#666"} size={20} />
        </IconWrapper>
      </SelectHeader>
      
      <OptionsListContainer isOpen={isOpen}>
        <OptionsList ref={optionsRef}>
          {options.map((option, index) => (
            <OptionItem 
              key={index} 
              onClick={() => handleOptionClick(option)}
              isSelected={option === selectedOption}
            >
              {option}{unit}
            </OptionItem>
          ))}
        </OptionsList>
      </OptionsListContainer>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  position: relative;
  user-select: none;
  font-size: 14px;
`;

const SelectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 6px 4px 10px;
  gap: 6px;
  border-radius: 4px;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  
  &:hover {
    border-color: #aaa;
  }
`;

const Label = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #444;
`;

const IconWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const OptionsListContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  bottom: 100%;
  left: 0;
  right: 0;
  z-index: 10;
  overflow: hidden;
  max-height: ${props => props.isOpen ? '200px' : '1px'};
  opacity: ${props => props.isOpen ? 1 : 0};
  transition: max-height 0.5s cubic-bezier(0.19, 1, 0.22, 1), 
              opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  pointer-events: ${props => props.isOpen ? 'auto' : 'none'};
  will-change: max-height, opacity;
`;

const OptionsList = styled.div`
  background-color: white;
  border: 1px solid #ccc;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  overflow-y: auto;
  max-height: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const OptionItem = styled.div<{ isSelected: boolean }>`
  padding: 8px 10px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? '#f5f7f8' : 'white'};
  
  &:hover {
    background-color: #ebf2ff;
  }
`;

export default SelectBox;

