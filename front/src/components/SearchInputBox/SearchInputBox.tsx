import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BiSearch } from "react-icons/bi";
import useDebounce from 'hooks/useDebounce';

interface SearchInputBoxProps {
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  delay?: number;
}

const SearchInputBox = ({ 
  value = '', 
  onChange, 
  placeholder = '검색', 
  delay = 300 
}: SearchInputBoxProps) => {
  const [inputValue, setInputValue] = useState(value);
  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <InputContainer>
      <Input 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder={placeholder} 
      />
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: 240px;

  &:focus {
    outline: none;
    border-color: #0066cc;
    box-shadow: 0 0 0 2px rgba(0, 102, 204, 0.2);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`;

const SearchIcon = styled(BiSearch)`
  color: #888;
  font-size: 16px;
`;

export default SearchInputBox; 