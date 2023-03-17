import React from 'react';
import PropTypes from 'react-prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList(props) {
  return (
    <div className='feedback-list'>
      {props.feedback.map((item) => <FeedbackItem key={item} item={item} />)}
    </div>
  )
}
FeedbackList.PropTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )
}
export default FeedbackList
