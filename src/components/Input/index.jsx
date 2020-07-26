import React, { useCallback, useRef, useState } from 'react';
import { FiGithub, FiAlertCircle } from 'react-icons/fi';

import { Container, Tooltip } from './styles'

const Input = ({ error, ...rest }) => {
  const [isFilled, setIsFilled] = useState(false);

  const inputRef = useRef(null);

  const handleInputBlur = useCallback(() => {
    setIsFilled(!!inputRef.current.value);
  }, []);

  return (
    <Container isfilled={isFilled} haserror={!!error}>
      <FiGithub />
      <input ref={inputRef} onBlur={handleInputBlur} {...rest} autoFocus />
      {error && (
        <Tooltip>
          <FiAlertCircle size={20} color="#c53030" />
          <span>{error}</span>
        </Tooltip>
      )}
    </Container>
  )
}

export default Input;
