import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./index.scss"
const Detail = () => {
  const { imdbID } = useParams();
  const [detail,setDetail]=useState([]);
  useEffect(() => {
axios.get(`https://www.omdbapi.com/?apikey=8e81bb0&s=${imdbID}`).then((data)=>{
  setDetail(data.data)
})
  }, [])
  console.log(detail);
  return (
    <div className='detail'>
     <h1>{detail.Title}</h1>

    </div>
  )
}

export default Detail
