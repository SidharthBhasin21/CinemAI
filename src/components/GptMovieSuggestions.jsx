import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
const GptMovieSuggestions = () => {

  const {movieNames, movieTmdbResults} = useSelector(store => store.gpt)

  if(!movieNames) return;
  return (
    <div className=' p-1 mx-2 md:p-4 md:mx-4 mt-6 md:mt-9 bg-black/70 rounded-2xl '>
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