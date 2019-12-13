import '../navBar.css';
import React from 'react';

function post(jsonPostObject) {
    //console.log(jsonPostObject);
    return (
        <div className="post" key={jsonPostObject._id}>
            <h3 className="postPublisher">
                {jsonPostObject.postPublisher}
            </h3>
            <p>
                {jsonPostObject.postContent}
            </p>
        </div>
    )

}

export default post;