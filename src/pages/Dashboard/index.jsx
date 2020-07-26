import React, { useState, useCallback } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { GoStar } from 'react-icons/go';

import api from '../../services/api';

import Input from '../../components/Input';
import Avatar from '../../components/Avatar';

import { Container, Form, Content, RepoItem, RepoItemInfo } from './styles';

const Dashboard = () => {
  const [repos, setRepos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [repoOwner, setRepoOwner] = useState({});

  const handleInputChange = useCallback(event => {
    setInputValue(event.target.value);
  }, []);

  const handleFormSubmit = useCallback(async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      if (!inputValue) {
        throw new Error('É necessário preencher o nome do usuário');
      }
      
      const [user, repos] = await Promise.all([api.get(`users/${inputValue}`), api.get(`users/${inputValue}/repos`)])

      setRepos(repos.data);
      setRepoOwner(user.data);
      setError('');
    }catch (err) {
      if (err.isAxiosError && err.response.status === 404) {
        setError('Usuário não encontrado');

        return;
      }

      setError(err.message)
    } finally {
      setLoading(false);
    }
  }, [inputValue]);

  return (
    <Container>
      <h1>GitHub Finder</h1>

      <Form onSubmit={handleFormSubmit}>
        <Input type="text" name="repo" error={error} placeholder="Digite o nome do usuário" onChange={handleInputChange} />
        <button type="submit">Procurar</button>
      </Form>

      {repos.length > 0 && (
        loading ? <AiOutlineLoading size={40} /> : (
          <Content>
            <Avatar src={repoOwner.avatar_url} alt={repoOwner.name}/>

            <h2>Repositórios de <strong>{repoOwner.name}</strong></h2>

            <ul>
              {repos.map(repo => (
                <RepoItem key={repo.id}>
                  <strong>{repo.name}</strong>

                  <RepoItemInfo>
                    <div>
                      {repo.description && <p>{repo.description}</p>}
                      <span>
                        {repo.stargazers_count}
                        <GoStar size={20} />
                      </span> 
                    </div>
                    <a href={repo.html_url}>Link para o repositório</a>
                  </RepoItemInfo>
                </RepoItem>
              ))}
            </ul>
          </Content>
        )
      )}

    </Container>
  );
};

export default Dashboard;
