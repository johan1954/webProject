import {cookieChecker} from './loginChecker';
import {useState} from 'react';

const newPost = () => {
    const [username, setUsername] = useState("");
    const [postContent, setPostContent] = useState("");

    async function poster() {
        let cookieUsername = await cookieChecker();
        if (cookieUsername != null) {
            setUsername(cookieUsername);
        }
    }

    const makeNewPost = async () => {

        if (username.length < 1 || postContent < 1) {
            return null;
        }

        const saveBody = JSON.stringify({postPublisher: username, postContent: postContent});
        console.log(saveBody);
        try {
            const databaseResponse = await fetch(address+'users/setUser', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: saveBody
            });
            const content = await databaseResponse.json();
            console.log(content);
        }
        catch (err) {
            console.log(err);
            return;
        }
    }

    return (
        <div className="post">
            <h3 className="postPublisher">
                {username}
            </h3>
            <p>
                {jsonPostObject.postContent}
            </p>
        </div>
    )
}

export default newPost;

