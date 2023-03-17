import React, {useState} from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import './index.css';

function App() {
   const [feedback, setFeedback] = useState(FeedbackData);
   const deleteFunction = (id) => {
    if(window.confirm('Are you sure you want to delete'))
       setFeedback(feedback.filter((feedback) => feedback.id!== id));
   }
    return (
        <>
            <Header text='Feedback UI' />
            <div className="container">
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFunction}/>
            </div>
        </>
    );
}

export default App;