import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReviewsCard from './ReviewsCard';
import './Reviews.css'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  const { id } = useParams();


  useEffect(() => {
    getCredits()
  }, [])

  function getCredits() {
    fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=dfac79bf601a1c8766457c868e28203e&language=en-US`)
      .then(res => res.json())
      .then(data => setReviews(data.results))
  }


  return (
    <>
      <h1 className='text-center'>Reviews</h1>

    </>
  )
}

export default Reviews
