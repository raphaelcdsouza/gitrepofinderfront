import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.li`
  display: flex;
  flex-direction: column;

  padding: 15px;
  border: 1px solid #343434;
  border-radius: 8px;

  transition: background 0.2s;

  & + li {
    margin-top: 15px;
  }

  &:hover {
    background: #181818;
  }

  strong {
    font-size: 30px;
    font-weight: 500;
  }
`;

export const RepoItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-right: 70px;

    p {
      margin-bottom: 10px;
      line-height: 24px;
    }

    span {
      display: flex;
      align-items: center;

      button {
        display: flex;
        align-items: center;

        border: none;
        background: none;

        cursor: ${props => !props.authenticated ? 'default' : 'pointer'};

        margin-right: 5px;
      }
    }
  }

  a {
    padding: 15px;
    text-decoration: none;
    font-weight: 500;
    background: #ff9000;
    color: #202020; 
    border-radius: 8px;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;
