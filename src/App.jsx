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
  const [todos, settodos] = useState([])

  useEffect(() => {
    console.log("I just run once")

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
        console.log(json)
      }).catch(e => {
        console.log(e)
      })

  }, []) // This effect just runs on page load
  useEffect(() => {
    console.log("I am depending on text")
  }, [text]) // This useEffect effect is depeiding on the text-state variable
  console.log(text);

  // filter users fefore rendering it - if there is a search string
  const filteredUsers = users.filter(user => user.name.includes(text));
  console.log("OUTSIDE");
  console.log(todos[3]);
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
          <label htmlhtmlFor="search">Search</label>
          <input
            id="search"
            onChange={(event => { // listen for onchange event in react style
              settext(event.target.value) // using the setter from the parent component
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
            <div key={index}>
              {/* key is needed for react to run loop operations more performant. Use index or other unique value */}
              <div className={"form-check"}>
                <input
                  className="form-check-input" // bootstrap stuff 
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                  defaultChecked={localTodo.completed ? true : false} // check if the todo in the state is completed and render the checkbox
                  onChange={(event => { // WHEN CHECKBOX IS RECEIVING ONCHANGE EVENT
                    let index = todos.findIndex(todoToFind => todoToFind.id === localTodo.id)// find the position of the clicked checkbox in the list  - because we want to alter the list (its our state)
                    localTodo.completed = !localTodo.completed // flip the value in the js variable in the Changed element (not the element in the original list yet)
                    todos[index] = localTodo // move the updated onchange element in the original list
                    settodos(todos) // upodate the state with the new list 
                  })}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {localTodo.title}
                </label>
              </div>
            </div>
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
