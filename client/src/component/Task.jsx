import React from "react";
import { MdDelete, MdEdit, MdTry } from "react-icons/md";
import { usePopup } from "../context/PopupContext";
import { useTasks } from "../context/TaskContext";

const Task = ({ task }) => {
  const { openPopup } = usePopup();
  const { deleteTask } = useTasks();

  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", task._id);
  };

  return (
    <div className="task" draggable onDragStart={handleDragStart}>
      <div className={`${task.status}-task task-heading`}>
        {task.title.split(" ")[0]}...
      </div>
      <div className="content">
        <div className="content-task">
          <p className="context-text">
            Title : <span> {task.title}</span>
          </p>
          <p className="context-text">
            Description : <span>{task.description}</span>
          </p>
        </div>
        <div className="button-group">
          <button
            className={`${task.status}-status-btn status-btn`}
            title="Edit Task"
            onClick={() => openPopup(task)}
          >
            <MdEdit size={24} />
          </button>

          <button
            className={`${task.status}-status-btn status-btn`}
            title="Delete Task"
            onClick={() => deleteTask(task._id)}
          >
            <MdDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
