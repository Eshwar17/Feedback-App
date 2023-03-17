import React, {useState} from 'react'

function FeedbackItem() {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState('Sample feedback');

    const handleClick = () => {
        // setRating(rating + 1);
        // setText('Thank you for your feedback');
        // setRating(10);
        //If you want to have the access to the previous value use the below function
        setRating((prev) => {
            return prev + 1;
        })
    };

    return (
        <div className='card'>
        <div className='num-display'>{rating}</div>
            <div className='text-display'>
                <h2>{text}</h2>
        </div>
        <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FeedbackItem
