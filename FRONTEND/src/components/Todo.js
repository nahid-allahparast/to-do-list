import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Todo.css";
import TodoItem from "./TodoItem";

const Todo = (props) => {
  const [todoName, setTodoName] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/todo").then((result) => {
      const todoData = result.data;
      const todos = [];

      for (const key in todoData) {
        todos.push({
          id: key,
          title: todoData[key].title,
          complated:false
          
        });
        // console.log(result.data[key]._id);
      }
      setTodoList(todos);
    });
  }, []);

  

  const inputChangeHandler = (event) => {
    setTodoName(event.target.value);
  };

  const todoAddHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/api/todo", {
        title: todoName,
        complated: false,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    if (!todoName) {
      alert("کارِت رو وارد نکردی!");
    } else {
      let newTodo = {
        todoName,
        complated: false,
      };
      setTodoList([...todoList, newTodo]);
      console.log(newTodo.complated)
    }

    setTodoName("");
  };


  const markComplete = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deletTodoHandler = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id)
    setTodoList(newTodoList)
    // console.log(id);
    // console.log(todoList[1])

    
    // console.log(test)

    //  console.log(test)

    // const test =  todoList.splice(key,1)
    // const test = setTodoList(todoList.filter((todos) => todos.id !== id))
    // console.log(test)

    // axios.delete('http://localhost:8000/api/todo').then((res)=>{
    //   console.log(res)
    // })
  };

  return (
    <div className="todo">
      <form onSubmit={todoAddHandler}>
        <button className="add-btn">+</button>

        <input
          className="todos"
          type="text"
          placeholder="... کارها"
          onChange={inputChangeHandler}
          value={todoName}
        />
      </form>
      <ul>
        {todoList.map((todo) => {
          return (
            // <div className="tasks">
            //   <i key={todo.id} onClick={() => deletTodoHandler(todo.id)} className='fa fa-trash'></i>
             
            //   <li type="text">{todo.title}</li>
            //   <input className="check-todo" type="checkbox" />
            // </div>
            <TodoItem
            todo ={todo}
            key={todo.id}
            deletTodoHandler={deletTodoHandler}
            markComplete={markComplete}

            />

          );
        })}
      </ul>
    </div>
  );
};
export default Todo;
