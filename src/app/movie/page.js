import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css'
const Movie = async() =>{

  await new Promise(resolve => setTimeout(resolve, 2000));


  const url = process.env.RAPID_KEY
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f2ddb74637msh7c4fd3ec873e856p188683jsn67857fe9bc44',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };
  
const res = await fetch(url,options)

const data = await res.json()
const main_data = data.titles


  return (
    <>
<section className={`${styles.movieSection}`}>
  <div className={`${styles.container}`}>
  <h1>
    Series & movie
  </h1>
  <div className={styles.card_section}>
  {
    main_data.map((curlElem)=>{
return <MovieCard key={curlElem.id}{...curlElem}/>
    })
  }
  </div>
 
  </div>
</section>
  
    </>

  )
}

export default Movie