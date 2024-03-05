import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../constants/constants'
import './Banner.css'
import { imageUrl } from '../../constants/constants'
import axios from '../../axios'


function Banner() {
const [movie,setMovie]=useState();
const randomId = ()=>{
    return Math.floor(Math.random()*20);
}
useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
        setMovie(res.data.results[randomId()]);
        console.log(res.data.results[randomId()]);
    })
},[])



  return (

    <div
    style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:''})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title||movie.original_title:''}</h1>
            <div className='banner-buttons'>
                <button className='button' >Play</button>
                <button className='button'>My List</button>          
            </div>
            <br />
            <h1 className='description'>{movie? movie.overview:''}</h1>
        </div>
      <div className="fade_bottom">

      </div>
    </div>
  )
}

export default Banner
