import React, { useState, useCallback } from 'react';

import api from '../../services/api';

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
    <>
      <h1>GitHub Finder</h1>

      <form onSubmit={handleFormSubmit}>
        <input type="text" name="repo" onChange={handleInputChange} />
        <button type="submit">Procurar</button>
      </form>

      {error && <span>{error}</span>}

      {repos.length > 0 && (
        <>
          <h2>Repositórios de <span>{repoOwner.name}</span></h2>

          {loading ? <p>Carregando...</p> : (
            <ul>
              {repos.map(repo => (
              <li key={repo.id}>
                <div>
                  <strong>{repo.name}</strong>
                  {repo.description && <p>{repo.description}</p>}
                  <a href={repo.html_url}>Link para o repositório</a>
                  <p><span>{repo.stargazers_count}</span> Número de estrelas</p>
                </div>
              </li>
            ))}
          </ul>)}
        </>
      )}

    </>
  );
};

export default Dashboard;
