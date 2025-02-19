import React from "react";
import { useTasks } from "../context/TaskContext";
import Task from "./Task";
import { BASE_URL } from "../config";

const TaskBox = ({ status }) => {
  const { tasks, fetchTasks} = useTasks();
  const tasksToRender = tasks[status] || [];

  const handleDrop = async (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");

    try {
      await fetch(`${BASE_URL}/api/tasks/move/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ toColumn: status }),
      });
      fetchTasks();
    } catch (error) {
      console.log("failed to move task", error);
    }
  };

  const handleDragOver = (e) => e.preventDefault();
  return (
    <>
    <div className="column" onDrop={handleDrop} onDragOver={handleDragOver}>
      <h2 className={`${status}-heading`}>{status.toUpperCase()}</h2>
      {tasksToRender.map((task) => (
        <Task key={task._id} task={task}  />
      ))}
    </div>
    </>
  );
};

export default TaskBox;
