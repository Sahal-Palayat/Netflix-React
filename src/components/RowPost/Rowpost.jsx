import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import './RowPost.css'
import Youtube from 'react-youtube'




function Rowpost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId]=useState('')
  
  useEffect(()=>{
    axios.get(props.url).then((res)=>{
        
        setMovies(res.data.results)
    }).catch((err)=>{
        // alert('network error')
        console.log('sss');
    })
  },[])  

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie=(id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((res)=>{
        if(res.data.results.length !==0){
            setUrlId(res.data.results[0])
        }else{
            console.log('emptyy');
        }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className='posters'>
        {
         movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)}  className= {props.isSmall?  'smallPoster':  'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
        )}
      
      </div>
      {urlId && <i className='fa fa-close' onClick={() => { setUrlId(false) }}></i>}
{ urlId &&  <Youtube opts={opts} videoId={urlId.key} />}    
</div>
  )
}

export default Rowpost
