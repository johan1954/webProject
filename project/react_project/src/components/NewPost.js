import React, {useState, useEffect} from 'react';
import {cookieChecker} from './loginChecker';
import address from '../config/config';
import {postDone} from '../actions/index';
import {useDispatch} from 'react-redux';

function NewPost () {

    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [postContentSet, setPostContent] = useState("");
    const [isErr, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        poster();
    }, []);
    async function poster() {
        let cookieUsername = await cookieChecker();
        if (cookieUsername != null) {
            setUsername(cookieUsername);
        }
    }

    const makeNewPost = async () => {
        let saveBody;
        if (username.length < 1 || postContentSet < 1) {
            setErrMsg("Post is not long enough!")
            setErr(true);
            return null;
        }
        setErr(false);
        try {
            saveBody = JSON.stringify({postPublisher: username, postContent: postContentSet});
        }
        catch (err) {
            setErrMsg("Post convert to Json failed!")
            setErr(true);
            console.log(err);
        }
        
        //console.log(saveBody);
        try {
            await fetch(address+'posts/setPost', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: saveBody
            });
            //const content = await databaseResponse.json();
            //console.log(content);

        }
        catch (err) {
            console.log(err);
            return;
        }
        dispatch(postDone());
    }

    return (
        <div className="post">
            <h3 className="postPublisher">
                {username}
            </h3>
            <textarea rows='4' cols='20' inputMode="text" onChange={(event) => setPostContent(event.target.value)}>
            </textarea>
            <br></br>
            <button onClick={() => {makeNewPost()}}>
                Submit
            </button>
            <button onClick={() => {dispatch(postDone())}}>
                Cancel
            </button>
            <br></br>
            {isErr ? <p className='Invalid'>{errMsg}</p> : ""}
        </div>
    )
}

export default NewPost;