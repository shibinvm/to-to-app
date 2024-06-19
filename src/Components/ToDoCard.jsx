import React from "react";

const ToDoCard = ({ SetCurrentTask, DeleteTaskList, taskIndex, children }) => {
  return (
    <div className="my-5 border p-5 rounded-lg bg-gray-50 flex">
      <p className="w-11/12">{children}</p>
      <div className="justify-end">
        <button
          className="mx-2"
          onClick={() => {
            SetCurrentTask({ value: children, index: taskIndex });
          }}
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button
          className="mx-2"
          onClick={() => {
            DeleteTaskList(taskIndex);
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default ToDoCard;
