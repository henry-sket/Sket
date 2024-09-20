import REACT from 'react';

import './App.css';

function App() {
 const handleClick = () => alert('Hello, React!');
  return (
    <div className="App">
    <h1>React Input Events and Forms</h1>
           <input type="text" placeholder="Enter your name" />
    </div>
  );
} 


export default App;
