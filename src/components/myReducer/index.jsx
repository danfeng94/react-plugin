import React, { useState, useEffect, useReducer } from 'react';
import Axios from 'axios';

const useMyReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT': return {
      ...state,
      isError: false
    }
    case 'FETCH_SUCCESS': return {
      ...state,
      isError: false,
      data: action.payLoad
    }
    case 'FETCH_FAILURE': return {
      isError: true
    }
    default: throw new Error()
  }
};

const useMyHooks = (initialUrl, initialData) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(useMyReducer, {
    isError: false,
    data: initialData
  });

  const doFetch = (url) => {
    setUrl(url);
  };

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await Axios(url);
        dispatch({ type: 'FETCH_SUCCESS', payLoad: result.data })
      } catch{
        dispatch({ type: 'FETCH_FAILURE' })
      }
    }

    fetchData();
  }, [url])

  return { ...state, doFetch };
}

function MyHooks() {
  const [query, setQuery] = useState(`redux`);
  const { isError, doFetch, data } = useMyHooks(`https://hn.algolia.com/api/v1/search?query=redux`, { hits: [] });
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          doFetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
        }}
      >
        <input
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">search</button>
        {
          isError ? <div>get some error</div> : <ul>
            {
              data.hits.map(item => (
                <li key={item.objectID}>
                  <a href={item.url}>{item.url}</a>
                </li>
              ))
            }
          </ul>
        }
      </form>
    </>
  );
}

export default MyHooks;