import React from 'react';

import { Container } from './styles';

const Avatar = ({ src, alt }) => {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  )
}

export default Avatar;
