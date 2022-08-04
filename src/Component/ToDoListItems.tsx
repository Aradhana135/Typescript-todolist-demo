import React, { FC } from "react";

// interface Todo{
//     text:String;
//     complete:boolean;
// }
interface props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const ToDoListItems: FC<props> = ({ todo, toggleTodo }) => {
  return (
    <>
      <li>
        <label
          style={{ textDecoration: todo.complete ? "line-through" : undefined }}
        >
          <input
            type="checkbox"
            checked={todo.complete}
            onClick={() => toggleTodo(todo)}
          />{" "}
          {todo.text}
        </label>
      </li>
    </>
  );
};

export default ToDoListItems;
