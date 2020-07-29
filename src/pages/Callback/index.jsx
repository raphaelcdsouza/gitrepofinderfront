import React, {useEffect} from 'react';
import { useHistory } from 'react-router-dom';


import useQuery from '../../hooks/query';
import { useGithubAuth } from '../../hooks/githubAuth';

const Callback = () => {
  const query = useQuery();
  const { setUserData, user } = useGithubAuth();
  const history = useHistory();

  useEffect(() => {
    async function auth() {
      const code = query.get('code');

      await setUserData(code);

      history.push('/');
    }

    if (!user) {
      auth();
    }
  }, [query, setUserData, history, user]);

  return <h1>Callback page</h1>
};

export default Callback;
