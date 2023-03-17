import React from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import './index.css';
function App() {
   
    return (
        <>
            <Header text='Prop' />
            <div className="container">
                <FeedbackItem />
            </div>
        </>
    );
}

export default App;