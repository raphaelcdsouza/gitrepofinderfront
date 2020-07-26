import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Input = ({ error, ...rest }) => {
  return (
    <div>
      <FiGithub />
      <input {...rest} autoFocus />
      {error && <span>{error}</span>}
    </div>
  )
}

export default Input;
