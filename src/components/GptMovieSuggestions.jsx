import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {

  const {movieNames, movieTmdbResults} = useSelector(store => store.gpt)

  if(!movieNames) return;
  return (
    <div className='p-4 m-4 bg-black/70 rounded-2xl '>
      <div>
        {
          movieNames.map((movie, index) => {
            
             return <MovieList title={movie} key={movie} movies={movieTmdbResults[index]} />

          })
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestions