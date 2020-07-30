import React, { useCallback, useState, useEffect } from 'react';
import { GoStar } from 'react-icons/go';

import api from '../../services/api';

import { useGithubAuth } from '../../hooks/githubAuth';

import { Container, RepoItemInfo } from './styles';

const RepoItem = ({ repo }) => {
  const [starred, setStarred] = useState(null);

  const { access_token } = useGithubAuth();

  useEffect(() => {
    async function starredByUser() {
      try {
        await api.get(`user/starred/${repo.owner.login}/${repo.name}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          }
        });

        setStarred(true);
      } catch(err) {
        setStarred(false);
      }
    }

    if (access_token) {
      starredByUser();
    }
  }, [access_token, repo.owner.login, repo.name]);

  const handleStarRepository = useCallback(async (repoOwner, repoName, requestType) => {
    if (!access_token) return;

    await api({
      method: requestType,
      url: `user/starred/${repoOwner}/${repoName}`,
      headers: {
        Authorization: `Bearer ${access_token}`,
      }
    });

    setStarred(() => {
      if (requestType === 'put') {
        return true;
      }

      return false;
    });
  }, [access_token]);

  return (
    <Container key={repo.id}>
      <strong>{repo.name}</strong>

      <RepoItemInfo authenticated={!!access_token}>
        <div>
          {repo.description && <p>{repo.description}</p>}
          <span>
            <button
              type="button"
              onClick={() => handleStarRepository(repo.owner.login, repo.name, !starred ? 'put' : 'delete')}
            >
              <GoStar size={20} color={starred ? '#fce00a' : '#dfdfdf'} />
            </button>
            {repo.stargazers_count}
          </span> 
        </div>
        <a href={repo.html_url}>Link para o repositório</a>
      </RepoItemInfo>
    </Container>
  );
}

export default RepoItem;
