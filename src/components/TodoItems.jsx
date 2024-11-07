import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";

import delete_icon from "../assets/trash.png";

// eslint-disable-next-line react/prop-types
const TodoItems = ({ text, id, isCompleted, deleteTodo, toggle }) => {
  return (
    <div className="flex  items-center my-3 gap-2">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img src={isCompleted ? tick : not_tick} alt="tick" className="w-6" />
        <p
          className={`text-slate-700 ml-3 text-[18px] decoration-slate-500 ${
            isCompleted ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt=""
        className="w-6 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
