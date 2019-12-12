import React, {useState, useEffect} from 'react';
import '../App.css';
import '../navBar.css';
import Post from '../components/post'
import address from '../config/config';

function Feed() {

    let [AltText,setText] = useState("DO NOT PRESS");
    let [number,setNumber] = useState(0);
    let [allPosts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);
    const sayHello = () => {
        console.log("Hello!");
    };

    const changeButton = () => {
        setText(AltText ="YES DO PRESS");
        setNumber(number + 1);
    }

    const fetchPosts = async () => {
        const postsData = await fetch(address + "posts/getPosts");
        let postDataJson = await postsData.json();
        console.log(postDataJson);
        setPosts(postDataJson);
        console.log(allPosts);
    }

    const makeNewPost = async () => {


        // const databaseResponse = fetch(address+"posts/setPost", {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body ({"postContent": "This is the final posting yayayeyey!", "postPublisher": "kakadu09"})
        // });
    }
    return (
        <div className="App">
        <h1>PineX</h1>
          <h1>Recent posts:</h1>
          <div className="postBackground">
              <button className="buttonExt">Create a new post</button>
              <button className="buttonExt" onClick={() => {fetchPosts()}}>Refresh</button>
              {allPosts.map(post => (Post(post)))}
          </div>
        </div>
    )
}

export default Feed;