import React, {useState, useEffect} from 'react';
import {createPost} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import '../App.css';
import '../navBar.css';
import Post from '../components/post'
import address from '../config/config';
import NewPost from '../components/NewPost';
import {cookieChecker} from '../components/loginChecker';


function Feed() {

    const dispatch = useDispatch();
    let [allPosts, setPosts] = useState([]);
    const postBool = useSelector(state => state.posting);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        // Before fetching verify login
        console.log("Fetching data");
        let username = await cookieChecker();
        if (username != null) {
            const postsData = await fetch(address + "posts/getPosts");
            let postDataJson = await postsData.json();
            postDataJson.reverse();
            setPosts(postDataJson);
        }

    }

    const execDispatch = () => {
        dispatch(createPost());
    }


    return (
        <div className="App">
        <h1>PineX</h1>
          <h1>Recent posts:</h1>
          <div className="postBackground">
              <button className="buttonExt" onClick={() => {execDispatch()}}>Create a new post</button>
              <button className="buttonExt" onClick={() => {fetchPosts()}}>Refresh</button>
              {postBool ? <NewPost/> : ""}
              {allPosts.map(post => (Post(post)))}
          </div>
        </div>
    )
}

export default Feed;