import React, { useState } from "react";
import "./App.css";
import ToDoListItems from "./Component/ToDoListItems";
import TodoList from "./Component/TodoList";
import { AddTodoForm } from "./Component/AddTodoForm";
const initialTodos: Todo[] = [
  {
    text: "Shopping",
    complete: false,
  },
  { text: "gardening", complete: false },
  { text: "cooking", complete: false },
  { text: "Ridding", complete: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo == selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <ul>
        {/* <ToDoListItems  todo={todos[0]} toggleTodo={toggleTodo}/>
    <ToDoListItems todo={todos[1]} toggleTodo={toggleTodo}/>
    <ToDoListItems todo={todos[2]} toggleTodo={toggleTodo}/>
    <ToDoListItems todo={todos[3]} toggleTodo={toggleTodo}/> */}
        {/* //using TodoList */}
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo} />
      </ul>
    </>
  );
}
export default App;
