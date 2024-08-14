import '../App.css';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import logo from '../logo.svg';
import data from './data';
import Question from './Question';

let globalId = 0;

function App() {
  const [task, setTask] = useState("Please Enter");
  const [todos, setTodos] = useState([]);

  function createTodos(e) {
    e.preventDefault();
    setTodos(oldTaskValues => {
      setTask(""); 
      return [...oldTaskValues, {todo: task, id: globalId++}];
    });
  }

  function deleteItem(id) {
    setTodos(oldTaskValues => oldTaskValues.filter((task)=> task.id !== id));
  }


  return (
    <div className='App'>
      <Header/>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="container">
            <h3>FAQ</h3>
            <section className="info">
            {data.map(d=> {
              return <Question title={d.title}/>
            })}
            </section>
        </div>

        <form onSubmit={createTodos}>
          <input type='text' value={task} 
            onChange={event => {
              setTask(event.target.value)
            }}
          />
          <button>Create Todos</button>
        </form>

        <ul>
          {todos.map(item => {
            return <div key={item.id}>
              <li>{item.todo} <button onClick={()=> deleteItem(item.id)}>Delete</button></li>
            </div>
          })}
        </ul>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React</a>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
