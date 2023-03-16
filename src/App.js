import React from "react";

function App() {
    const title = 'My Blog';
    const blog = 'This is my blog';
    const comments = [
        {id: 1, text: 'Comment one'},
        {id: 2, text: 'Comment two'},
        {id: 3, text: 'Comment three'},
    ]
    const showComments = false;
    const commentBlock = (<div className="comments">
    <h3>Comments({comments.length})</h3>
    <ul>
        {comments.map((comment, index) => 
        (
            <li key={index}>{comment.text}</li>
        ))}
    </ul>
</div>);
    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{blog}</p>
            {showComments && commentBlock}
        </div>
    );
}

export default App;