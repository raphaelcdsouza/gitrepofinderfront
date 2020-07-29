import React, {useEffect} from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import useQuery from '../../hooks/query';
import { useGithubAuth } from '../../hooks/githubAuth';

import { Container } from './styles';

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

  return (
    <Container>
      <h1>Configurando conta do Github</h1>
      <AiOutlineLoading size={40} />
    </Container>
  );
};

export default Callback;
