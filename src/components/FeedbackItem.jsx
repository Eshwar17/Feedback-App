import Card from "./shared/Card"
import PropsTypes from "react-props-types"
function FeedbackItem({item}) {

    return (
        <Card>
        <div className='num-display'>{item.rating}</div>
            <div className='text-display'>
                <h2>{item.text}</h2>
        </div>
        </Card>
    )
}

FeedbackItem.PropTypes = {
    item: PropsTypes.object.isRequired,
}

export default FeedbackItem
