import React from 'react'
import useGenres from '../hooks/useGenres'

const GenreList = () => {

  const { genreList, error, isLoading } = useGenres();

  return (
    <>
      <div>GenreList</div>
      <ul>
        {genreList.map((genre) => 
          <li key={genre.id}>{genre.name}</li>
        )}
      </ul>
    </>
    
  )
}

export default GenreList