import {motion, AnimatePresence} from 'framer-motion'
import React from 'react';

import FeedbackItem from './FeedbackItem';

function FeedbackList(props) {
  if(!props.feedback || props.feedback.length === 0) {
    return <p>No feedbacks yet!!</p>
  }
  return (
    <div className='feedback-list'>
    <AnimatePresence>
      {props.feedback.map((item) => 
      <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
      <FeedbackItem key={item} item={item} handleDelete={props.handleDelete}/>
      </motion.div>)}
    </AnimatePresence>
    </div>
  )
  // return (
  //   <div className='feedback-list'>
  //     {props.feedback.map((item) => <FeedbackItem key={item} item={item} handleDelete={props.handleDelete}/>)}
  //   </div>
  // )
}

export default FeedbackList
