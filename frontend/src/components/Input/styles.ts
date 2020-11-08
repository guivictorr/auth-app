import styled from 'styled-components';

interface InputProps {
  isFocused: boolean;
}

export const Container = styled.div<InputProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  width: 356px;
  border: 1px solid ${({ isFocused }) => (isFocused ? '#2f80ed' : '#bdbdbd')};
  border-radius: 8px;
  padding: 16px 14px;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    color: #e0e0e0;
    flex: 1;
    margin-left: 10px;
    font-size: 16px;

    &::placeholder {
      color: #828282;
      font-size: 16px;
    }
  }

  .icon-click {
    cursor: pointer;
  }
`;
