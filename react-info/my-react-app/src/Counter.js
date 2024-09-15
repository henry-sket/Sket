import React from 'react'
function Counter() {
  return (
    <div>
    {/* Counter content goes here */}
    </div>
  );
}
export default Counter;
import React, ( useState ) from 'react';
function Counter(){
  const {count, setCount} = useState(0)'
    return(
      <div>
      <p>Count: (count)</p>
  <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
}
export default Counter;
import React, { useState, useEffect } from 'react';
function DataFetching() {
  //Component logic goes here
}
const [data, setData] = useState([]);
useEffect(() => {
  //Fetch data from an API
}, []);
fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => response.json())
.then((data) => setData(data));
return (
  <div>
  <h2>Posts</h2>
<ul>
  {data.map.((post) => (
    li key={post.id}>{post.title} </li>
    ))}
    </ul>
      </div>
);
}
export default DataFetching;

