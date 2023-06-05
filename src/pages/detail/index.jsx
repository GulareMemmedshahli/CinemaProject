import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "./index.scss"
const Detail = () => {
  const { imdbID } = useParams()
  const [detail,setDetail]=useState([])
  useEffect(() => {
axios.get(`https://www.omdbapi.com/?apikey=b94162b4&i=${imdbID}`).then((data)=>{
  setDetail(data.data)
})
  }, [])
  console.log(detail);
  return (
    <div className='detail'>
      <img src={detail.Poster} alt="" />
      <div className='detailword'>
      <h3>Film Name : {detail.Title}</h3>
      <h3>Year : {detail.Year}</h3>
      <h3>Type : {detail.Type}</h3>


      </div>
   

    </div>
  )
}

export default Detail
