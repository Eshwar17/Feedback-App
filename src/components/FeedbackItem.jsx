import { FaTimes } from 'react-icons/fa'
import Card from "./shared/Card"

function FeedbackItem({item, handleDelete}) {

    return (
        <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} className='close'>
            <FaTimes color='purple' />
        </button>
            <div className='text-display'>
                <h2>{item.text}</h2>
        </div>
        </Card>
    )
}

export default FeedbackItem
