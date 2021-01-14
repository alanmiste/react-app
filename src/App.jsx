import { useState, useEffect } from "react" // getting react and state helper function
import logo from './logo.svg'; // we get a dynamic logo
import './App.css';
import Nav from "./Nav"
import Footer from "./Footer"

function App() { // component based (App = Main component)
  const [number, setnumber] = useState(0) // getter and setter - using the state hook to create a dynamic variable
  const [name, setname] = useState("") // getter and setter for name variable
  const salutaion = "Alan"
  const users = [{ name: "Pol", age: "30" }, { name: "Pal", age: "31" }, { name: "Pil", age: "32" }, { name: "Pyl", age: "33" }, { name: "Pxl", age: "34" }]
  const [text, settext] = useState("")
  useEffect(() => {
    console.log("I just run once")
  }, []) // This effect just runs on page load
  useEffect(() => {
    console.log("I am depending on text")
  }, [text]) // This useEffect effect is depeiding on the text-state variable
  console.log(text);

  // filter users fefore rendering it - if there is a search string
  const filteredUsers = users.filter(user => user.name.includes(text));
  return ( // JSX = react html template style virtual DOM
    <div className="App">
      <Nav myname={salutaion} />{/* pass props down to child component (Nav) **/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />{/* display dynamic image source **/}
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
                setname(json.username) // setter function of the react state
              }).catch(e => {
                console.log(e)
              })
          }} //increment the number on click on the link
          //href="https://reactjs.org"
          //target="_blank"
          rel="noopener noreferrer"
        >
          Display thw dainamic value {number}
        </a>
        name : <code>{name}</code>
      </header>
      props drilling
      <Footer users={filteredUsers} text={text} settext={settext} logo={logo}/> 
    </div>
  );
}

export default App;
