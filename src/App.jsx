import { useState, useEffect } from "react" // getting react and state helper function
import logo from './logo.svg'; // we get a dynamic logo
import './App.css';
import Nav from "./Nav"
import Footer from "./Footer"
import Checkbox from "./Checkbox"

function App() { // component based (App = Main component)
  const [number, setnumber] = useState(0) // getter and setter - using the state hook to create a dynamic variable
  const [name, setname] = useState("") // getter and setter for name variable
  const salutaion = "Alan" // undynamic value which doesnt trigger re-renders
  const users = [{ name: "Pol", age: "30" }, { name: "Pal", age: "31" }, { name: "Pil", age: "32" }, { name: "Pyl", age: "33" }, { name: "Pxl", age: "34" }]
  const [text, settext] = useState("Hello") // Initialize state with start value
  const [todos, settodos] = useState([]) // Initialize as empty array - bc it will be an aray later

  useEffect(() => {
    //get "todos" from json placeholder
    //put the "todos" also in a state variable instead of a local variable
    //render the fetched "todos" instead of the static "todos"
    fetch(`https://jsonplaceholder.typicode.com/todos`) // simple GET request
      //start then()
      .then(response => {
        return response.json()
      }) //then is awating the promisse. parse the response in JSON.
      .then(json => {
        settodos(json) // setter function of the react state
      }).catch(e => {
        console.log(e)
      })

  }, []) // This effect just runs on page load
  useEffect(() => {
    console.log("I am depending on text")
  }, [text]) // This useEffect effect is depeiding on the text-state variable

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
      <main>
        <div>
          <label htmlFor="search">Search</label>
          <input // UNCONTROLLED COMPONENT - it just writes to the state, but has no value from the state
            id="search" // 
            onChange={(event => { // listen for onchange event in react style
              settext(event.target.value) // using the setter from the parent component
            })}
          />

        </div>
        <div>
          <label htmlFor="search">Test bind react contorlled components</label>
          <input // CONTROLLED REACT COMPONENT
            id="test"
            value={text} // this makes it to a controlled component - instantly after state change read that state variable
            onChange={(event => { // this makes it to a controlled component -  listen for onchange event in react style
              settext(event.target.value) // set the state on change event
            })}
          />

        </div>
        <div>
          Localtext is: {text} {/*the getter from the parent component **/}
        </div>


        {/* react loops need a unique key to be more performant*/}
        {users.map(user => (
          <div key={user.name}>{user.name}</div>
        ))}

        conditional rendering
        <div className="container">
          {todos.map((localTodo, index) => ( // state list which is trigger re-render
            <Checkbox
              localTodo={localTodo}
              key={index}
              todos={todos}
              settodos={settodos}
            />
          ))}
        </div>
      </main>

      <Footer
        users={filteredUsers}
        text={text}
        settext={settext}
        logo={logo}
      />
    </div>
  );
}

export default App;
