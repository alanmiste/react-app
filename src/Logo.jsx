import logo from './logo.svg'; // we get a dynamic logo

function Logo() { // component

    return ( // JSX = react html template style virtual DOM
        <img src={logo} alt="logo" />
    );
}

export default Logo;
