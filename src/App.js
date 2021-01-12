import React, { useState } from "react"
import logo from './logo.svg';
import './App.css';

function App() {
  const [number, setnumber] = useState(0) // getter and setter - using the state hook to create a dynamic variable
  const [name, setname] = useState("") // getter and setter for name variable
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={() => {
            setnumber(number + 1)
            fetch(`https://jsonplaceholder.typicode.com/users/${number}`) // simple GET request
              //start then()
              .then(response => {
                return response.json()
              }) //then is awating the promisse. parse the response in JSON.
              .then(json => {
                console.log(json.name)
                console.log(json.username)
                setname(json.username) // setter function of the react state
              }).catch(e => {
                console.log(e)
              })
            console.log(number)
          }} //increment the number on click on the link
          //href="https://reactjs.org"
          //target="_blank"
          rel="noopener noreferrer"
        >
          Display thw dainamic value {number}
        </a>
        name : <code>{name}</code>
      </header>
    </div>
  );
}

export default App;
