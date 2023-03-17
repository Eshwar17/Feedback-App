function FeedbackItem({item}) {

    return (
        <div className='card'>
        <div className='num-display'>{item.rating}</div>
            <div className='text-display'>
                <h2>{item.text}</h2>
        </div>
        </div>
    )
}

export default FeedbackItem
