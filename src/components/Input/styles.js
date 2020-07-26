import styled, { css } from 'styled-components';

export const Container = styled.label`
  background: #181818;
  color: #343434;
  border: 2px solid #343434;
  border-radius: 8px;
  width: 100%;
  height: 56px;
  padding: 16px;
  transition: border-color 0.2s;
  display: flex;
  align-items: center;

  &:focus-within {
    color: #ff9000;
    border-color: #ff9000;
  }

  ${props =>
    props.haserror &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isfilled &&
    css`
      color: #ff9000;
    `}

  input {
    color: #dfdfdf;
    border: 0;
    background: transparent;
    flex: 1;

    margin: 0 10px 0 10px;

    &::placeholder {
      color: #9f9f9f;
    }
  }

  > svg {
    transition: color 0.2s;
  }
`;

export const Tooltip = styled.div`
  display: flex;
  align-items: center;

  text-align: center;
  position: relative;

  span {
    width: 160px;
    background: #c53030;
    color: #202020;
    padding: 8px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-style: solid;
      border-color: #c53030 transparent;
      border-width: 6px 6px 0 6px;
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
