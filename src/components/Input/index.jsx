import React from 'react';

const Input = ({ error, ...rest }) => {
  return (
    <div>
      <input {...rest} />
      {error && <span>{error}</span>}
    </div>
  )
}

export default Input;
