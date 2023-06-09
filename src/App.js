import {v4 as uuidv4} from 'uuid';
import React, {useState} from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import './index.css';
import FeedbackForm from "./components/FeedbackForm";

function App() {
   const [feedback, setFeedback] = useState(FeedbackData);
   const deleteFunction = (id) => {
    if(window.confirm('Are you sure you want to delete'))
       setFeedback(feedback.filter((feedback) => feedback.id!== id));
   }
   const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback,...feedback]);
   }
    return (
        <>
            <Header text='Feedback UI' />
            <div className="container">
                <FeedbackForm handleAdd={addFeedback}/>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFunction}/>
            </div>
        </>
    );
}

export default App;