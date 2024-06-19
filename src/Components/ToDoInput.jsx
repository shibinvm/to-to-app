const ToDoInput = ({ addTask, currentTask, taskText }) => {
  // console.log(currentTask);

  // useEffect(() => {
  //   console.log(currentTask);
  //   taskText.current.value = currentTask?.value ?? "";
  // }, []);
  console.log(currentTask);
  return (
    <div>
      <div className="my-5 border flex justify-start p-5 rounded-lg bg-gray-50">
        <input
          // defaultValue={currentTask?.value || ""}
          ref={taskText}
          placeholder="Task Title"
          type="text"
          className="border border-gray-200 rounded-lg p-2 mx-4"
        ></input>
        <button
          onClick={() => {
            currentTask.value = taskText.current.value;
            addTask(currentTask);
          }}
          className="px-5 bg-blue-400 text-white rounded-lg"
        >
          {currentTask.index != null ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default ToDoInput;
