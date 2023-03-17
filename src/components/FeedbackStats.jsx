import React from 'react'

function FeedbackStats(props) {
    //Calculate the average
    let average = props.feedback.reduce((accum, cur) =>{
        return accum + cur.rating;
    },0) / props.feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className='feedback-stats'>
      <h4>{props.feedback.length} Reviews</h4>
      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
