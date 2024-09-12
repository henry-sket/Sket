import REACT from 'react';

import './App.css';

function Mycomponent() {
 const handleClick = () => alert('Hello, React!');
  return (
    <div>
    <h1>Hello, React!</h1>;
           <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Mycomponent;
