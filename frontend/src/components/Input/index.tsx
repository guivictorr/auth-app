import React, {
  ComponentType,
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ComponentType<IconBaseProps>;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({
  icon: Icon,
  isPassword = false,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <Icon size={22} />
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
        type={showPassword ? 'text' : rest.type}
      />
      {isPassword &&
        (showPassword ? (
          <FaEyeSlash
            size={16}
            color="#828282"
            onClick={() => setShowPassword(!showPassword)}
            className="icon-click"
          />
        ) : (
          <FaEye
            size={16}
            color="#828282"
            onClick={() => setShowPassword(!showPassword)}
            className="icon-click"
          />
        ))}
    </Container>
  );
};

export default Input;
