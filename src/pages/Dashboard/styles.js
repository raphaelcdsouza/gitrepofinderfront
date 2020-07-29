import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const round = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  max-width: 900px;
  margin: 50px auto;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    h1 {
      font-size: 50px;
      font-weight: 700;
    }

    > a {
      padding: 8px 15px;
      text-decoration: none;
      font-weight: 500;
      background: rgb(113, 89, 193);
      color: #202020; 
      border-radius: 8px;
      transition: background 0.2s;

      &:hover {
        background: ${shade(0.2, 'rgb(113, 89, 193)')};
      }
    }
  }

  > svg {
    align-self: center;
    animation: ${round} 1s linear infinite;
  }
`;

export const GithubAvatar = styled.div`
  display: flex;
  align-items: center;
  color: #202020;
  font-weight: 700;
  background: rgb(113, 89, 193);
  height: 35px;
  padding: 8px 15px 8px 30px;
  border-radius: 8px;

  svg {
    margin-right: 6px;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    object-fit: cover;
    border-radius: 50%;
    overflow: hidden;
    margin-left: -40px;
    margin-right: 6px;
    border: 3px solid rgb(113, 89, 193);

    img {
      height: 50px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  button {
    background: #ff9000;
    color: #202020;
    padding: 20px;
    margin-left: 20px;
    height: 56px;
    border: none;
    border-radius: 8px;
    transition: background 0.2s;
    font-weight: 500;

    &:hover {
      background: ${shade(0.2, '#ff9000')};
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 30px;
    
    strong {
      font-weight: 700;
    }
  }

  ul {
    list-style: none;
  }
`;

export const RepoItem = styled.li`
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

      svg {
        margin-left: 5px;
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
