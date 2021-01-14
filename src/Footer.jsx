import Logo from "./Logo.jsx"

function Footer(props) { //the footer is a child from APP.jsx 

  return ( // JSX = react html template style virtual DOM
    <footer>
      Footer
      <Logo logo={props.logo} /> {/* Child from footer - the footer is a child from APP.jsx */}
      
      {/*we put the next block into the APP.JSX*/}
{/*       <div>
        <label htmlFor="search">Search</label>
        <input
          id="search"
          onChange={(event => { // listen for onchange event in react style
            props.settext(event.target.value) // using the setter from the parent component
          })}
        />
        
      </div>
      <div>
        Localtext is: {props.text} {/*the getter from the parent component 
      </div> */

      
      /* react loops need a unique key to be more performant
      {props.users.map(user => (
        <div key={user.name}>{user.name}</div> 
      ))}
*/}


    </footer>
  );
}

export default Footer;
