import React, {useState} from 'react';
import '../App.css';

function Feed() {

    let [AltText,setText] = useState("DO NOT PRESS");
    let [number,setNumber] = useState(0);

    const sayHello = () => {
        console.log("Hello!");
    };

    const changeButton = () => {
        setText(AltText ="YES DO PRESS");
        setNumber(number + 1);
    }
    return (
        <div className="App">
            <h1>Hello react!</h1>
          <button onClick={changeButton}>{AltText}</button>
          <h3>{number}</h3>
        </div>
    )
}

export default Feed;