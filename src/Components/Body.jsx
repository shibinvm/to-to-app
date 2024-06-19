import React, { useEffect, useRef, useState } from "react";
import ToDoInput from "./ToDoInput";
import ToDoLIst from "./ToDoLIst";

const Body = () => {
  const [TaskList, SetTaskList] = useState([]);
  const [currentTask, SetCurrentTask] = useState({});
  const [PageTitle, SetPageTitle] = useState("Add New Task");
  const taskText = useRef();
  const addTaskListHandler = (task) => {
    //console.log("Add Handler", task);

    if (task.index == undefined) {
      const newTaskList = [...TaskList, task.value];
      SetTaskList(newTaskList);
      localStorage.setItem("toDos", JSON.stringify({ toDos: newTaskList }));
    } else {
      const filterTasks = TaskList.filter(
        (taskItem, taskIndex) => taskIndex != task.index
      );
      const newTaskList = [...filterTasks, task.value];
      SetTaskList(newTaskList);
      localStorage.setItem("toDos", JSON.stringify({ toDos: newTaskList }));
    }
    SetCurrentTask({ value: "", index: null });
    taskText.current.value = "";
    SetPageTitle("Add New Task");
  };

  const deleteTaskListHandler = (index) => {
    const newTaskList = TaskList.filter(
      (task, taskIndex) => taskIndex != index
    );
    SetTaskList(newTaskList);
  };

  const SetCurrentTaskHandler = (task) => {
    if (task.index == undefined) {
      SetPageTitle("Create New Task");
    } else {
      SetPageTitle("Edit Task");
    }
    SetCurrentTask(task);
    taskText.current.value = task.value;
  };

  useEffect(() => {
    if (!localStorage) return;

    let localToDos = localStorage.getItem("toDos");
    if (!localToDos) return;

    localToDos = JSON.parse(localToDos).toDos;
    SetTaskList(localToDos);
  }, []);

  return (
    <>
      <div className="p-4 flex m-auto w-9/12 justify-center">
        <div className="flex flex-col w-full">
          <h1 className="font-bold text-lg text-left">{PageTitle}</h1>
          <ToDoInput
            addTask={addTaskListHandler}
            currentTask={currentTask}
            taskText={taskText}
          />
          <ToDoLIst
            TaskList={TaskList}
            DeleteTaskList={deleteTaskListHandler}
            SetCurrentTask={SetCurrentTaskHandler}
          />
        </div>
      </div>
    </>
  );
};

export default Body;
