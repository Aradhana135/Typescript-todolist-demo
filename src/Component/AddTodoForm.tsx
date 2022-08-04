import { FC, useState } from "react";
interface props {
  addTodo: AddTodo;
}
export const AddTodoForm: FC<props> = ({ addTodo }) => {
  const [text, setText] = useState("");
  return (
    <>
      <form>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText("");
          }}
        >
          Add To The List
        </button>
      </form>
    </>
  );
};
