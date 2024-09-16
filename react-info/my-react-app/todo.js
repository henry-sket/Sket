import Todo from './components/Todo';
function App() {
  return (
    <div> className="App">
</div>
);
}
export defafult App;
<h1 style={{ textAlign: 'center', color: 'darkblue' }}>My To-Do List</hl>
<div style={{ textAlign: 'center' }}>
<input 
type="text"
placeholder="Add a new task"
style= {{ padding: '5px' }}
/>
<button
style={{
  backgroundColor: 'dark blue',
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  marginLeft: '5px',
}}
>
Add
  </button>
<ul style={{ listStyleType: 'circle', paddingLeft:'20px'}}>
{/* Task items will be added here */}
</ul>
function Todo() {
  return (
    <div>
    <hl style={{ textAlign: 'center', color: 'darkblue' }}>
My To-Do List
  </hl>
<div style={{ textAlign: 'center', }}>
<input
type="text"
placeholder= "Add a new task"
style= padding: '5px' }}
/>
<button
style={{
  backgroundColor: 'darkblue',
  color: 'white',
  padding: '5px 10px',
  border: 'none',
  marginLeft: '5px',
}}
>
Add
  </button>
  </div>
<ul style={{ listStyleType: 'circle', paddingLeft: '20px'}}>
{/* Task items will be added here */}
</ul>
  </div>
);
}

export default Todo;
