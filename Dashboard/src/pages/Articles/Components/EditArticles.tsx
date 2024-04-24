import React from 'react'
import DefaultLayout from '../../../layout/DefaultLayout'
import { useParams } from 'react-router-dom';

function EditArticles() {
  const { id } = useParams();
  console.log(id);
  return (
    <DefaultLayout>
      <div>EditArticles</div>
    </DefaultLayout>
  )
}

export default EditArticles