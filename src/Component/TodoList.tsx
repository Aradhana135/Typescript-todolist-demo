import { FC } from "react";
import ToDoListItems from "./ToDoListItems";
interface props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
}
const TodoList: FC<props> = ({ todos, toggleTodo }) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <ToDoListItems key={todo.text} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
