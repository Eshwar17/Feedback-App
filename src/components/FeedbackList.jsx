import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList(props) {
  return (
    <div className='feedback-list'>
      {props.feedback.map((item) => <FeedbackItem key={item} item={item} />)}
    </div>
  )
}

export default FeedbackList
