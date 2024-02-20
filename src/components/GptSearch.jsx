import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { LOGIN_BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 ">
          <img src={LOGIN_BG_URL} alt="background-img" className='blur-xl h-screen object-cover md:w-screen'/>
      </div>
      
      <div >
        <GptSearchBar/> 
        <GptMovieSuggestions/>
      </div>
    </>
  )
}

export default GptSearch