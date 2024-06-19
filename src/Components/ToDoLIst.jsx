import React from "react";
import ToDoCard from "./ToDoCard";

const ToDoLIst = (props) => {
  const { TaskList } = props;
  return TaskList.length == 0 ? (
    <div className="text-center my-5 border p-5 rounded-lg bg-gray-50">
      No Task..
    </div>
  ) : (
    <div>
      {TaskList.map((task, taskIndex) => (
        <ToDoCard taskIndex={taskIndex} {...props} key={taskIndex}>
          {task}
        </ToDoCard>
      ))}
    </div>
  );
};

export default ToDoLIst;
