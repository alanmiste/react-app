import "./Nav.css";
import { useState, useEffect } from "react"
function Nav(props) { // component
  // 1 define state getter and setter
  // get time
  // set current time on interval
  // print time in template

  const [time, settime] = useState(0)
  /*useEffect(() =>{
    setInterval(() => {

    settime(Date.now())
    console.log(Date.now());
  }, 1000);
}, [])*/

  return ( // JSX = react html template style virtual DOM
    <nav>
      Nav - i am {props.myname} - and thats the time: 
      {time}
    </nav>
  );
}

export default Nav;
