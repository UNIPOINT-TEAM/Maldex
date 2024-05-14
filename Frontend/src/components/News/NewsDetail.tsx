import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchHook } from '../../hooks/UseFetch';
import { BASE_URL } from '../../services/services';

function NewsDetail() {
  const { id } = useParams();
  const { fetchData, response } = useFetchHook();

  useEffect(() => {
    fetchData({ method: "GET", url: `/articles/${id}` });
  }, [id]);

  // Проверяем, есть ли значение в response
  if (!response) {
    return <div>Loading...</div>;
  }

  console.log(response);
  
  return (
    <div className='container_xxl'>
      {/* Проверяем, есть ли значение в response.body, прежде чем использовать его */}
      <div className='m-auto'>{response.body}</div>

      {/* Применяем замену src только если есть значение в response.body */}
      {response.body && (
        <div
          dangerouslySetInnerHTML={{ __html: response.body.replace(
            /src="\/media/g,
            `src="${BASE_URL}/media`,
          ) }}
        />
      )}
    </div>
  );
}

export default NewsDetail;
