import React, {useEffect} from 'react';

import api from '../../services/api';

import useQuery from '../../hooks/query';

const Callback = () => {
  const query = useQuery();

  useEffect(() => {
    async function auth() {
      const code = query.get('code');

      try { 
        const response = await api.post('http://localhost:3333/github-authenticate', {
          code,
        });

        console.log(response.data);
      }catch (err) {
        console.log(err);
      }
    }

    auth();
  }, [query]);

  return <h1>Callback page</h1>
};

export default Callback;
