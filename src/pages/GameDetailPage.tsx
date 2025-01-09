import React from 'react'
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {

  const params = useParams(); // URL Params

  console.log(params);

  return (
    <div>GameDetailPage</div>
  )
}

export default GameDetailPage