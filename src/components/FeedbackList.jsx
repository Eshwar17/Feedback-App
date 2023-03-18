import React from 'react';

import FeedbackItem from './FeedbackItem';

function FeedbackList(props) {
  if(!props.feedback || props.feedback.length === 0) {
    return <p>No feedbacks yet!!</p>
  }
  return (
    <div className='feedback-list'>
      {props.feedback.map((item) => <FeedbackItem key={item} item={item} handleDelete={props.handleDelete}/>)}
    </div>
  )
}

export default FeedbackList
