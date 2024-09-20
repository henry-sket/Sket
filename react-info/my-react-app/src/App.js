import REACT, { useState } from 'react';

import './App.css';

function App() {
 const [Henry, HenrySket] = useState('');
 const [email, setEmail] = useState('');
const handleInputChange = (e) => {
 const { name, value } = e.target;
 if (name === 'name') {
   setName(value);
 } else if (name === 'email') {
    setEmail(value);
 }
};
 const handleSubmit = (e) => {
  e.preventDefault();
   alert('Name: ${name}\nEmail: ${email}' );
 return (
    <div className="App">
    <h1>React Input Events and Forms</h1>
<form> onSubmit={handleSubmit}>
 <label>
   Name:  
  <input 
  type="text" 
  name="Henry-sket"
  value={name}
   onChange={handleInputChange}
    />
    </label>
    <br />
    <label>
    Email:
 <input
    type="email"
     name="email"
      value={email}
       onChange={handleInputChange}
        />
        </label>
        <br />
    <button type="submbit">Submit</button>
    </form>
    <p>Name: {name}!</p>
    <p>Email:  {email}</p>
    </div>
  );
export default App;

export default App;
