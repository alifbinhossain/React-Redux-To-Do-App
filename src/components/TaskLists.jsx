import React from "react";
import { useSelector } from "react-redux";
import SingleTask from "./SingleTask";

const TaskList = () => {
  const taskList = useSelector((state) => state.list.taskList);

  console.log(taskList);
  return (
    <ul className="task-list">
      {taskList.map((task, index) => (
        <SingleTask key={task.id} index={index} taskDetails={task}></SingleTask>
      ))}
    </ul>
  );
};

export default TaskList;
