import React from 'react'
import { useRef } from 'react'
import openai from '../utils/OpenAi'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResults } from '../utils/slices/gptSlice'
import { useDispatch } from 'react-redux'


const GptSearchBar = () => {

  const input = useRef(null)
  const dispatch = useDispatch()

  const handleGptSearchClick = async ()=>{
    
    const query = `Act as an movie recommendation system and suggest me some movies for the query: ${input.current.value}, Only give me names of the 5 movies, comma seperated like the example result given ahead: Example - tiger, Fight club, KGF, Iron-man, captian america`

    const results  = await openai.chat.completions.create({
      messages: [{ role: 'user', content: query}],
      model: 'gpt-3.5-turbo',
    });
    const movies = results.choices[0]?.message?.content.split(',').map(movie => movie.trim());
    
    console.log(movies);

    const movieData = await Promise.all(movies.map(movie => searchMovies(movie)))
    console.log(movieData);

    dispatch(addGptMovieResults({movieTmdbResults: movieData, movieNames: movies}))

  }
  const searchMovies = async (movie) => {
     
    const url = 'https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false &language=en-US&page=1';
    

    const data = await fetch(url, API_OPTIONS)

    const jsonData = await data.json()
    
    return jsonData.results

  }


  return (
    <div className='pt-[50%] md:pt-[20%] flex justify-center '>
        <form className='w-full md:w-1/2 mx-3 md:mx-0 md:p-6 grid grid-cols-12 bg-black/50 shadow-black shadow-xl  rounded-2xl' onSubmit={(e) => e.preventDefault()}>
            <input type="text" 
                ref={input}
                placeholder="What Would you like to watch?" 
                className="md:p-4 md:m-4 m-3 p-2 col-span-9 rounded-md text-sm md:text-lg shadow-black  focus:outline-none"
            />
            <button 
              className='bg-red-600 px-4 py-2 my-3 mx-2 md:m-4 border-red-900  col-span-3 rounded-md text-white shadow-black shadow-lg hover:outline outline-red-500'
              onClick={()=> handleGptSearchClick()}
            > Search </button>
        </form>
    </div>
  )
}

export default GptSearchBar