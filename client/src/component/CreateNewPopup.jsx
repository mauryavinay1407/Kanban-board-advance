import React, { useEffect, useState } from "react";
import { useTasks } from "../context/TaskContext";
import { RxCross1 } from "react-icons/rx";
import { usePopup } from "../context/PopupContext";

const CreateNewPopup = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");

  const { taskToEdit, setTaskToEdit } = usePopup();
  const { fetchTasks } = useTasks();

  // reset the inputs
  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDescription(taskToEdit.description || "");
      setStatus(taskToEdit.status || "todo");
    } else {
      setTitle("");
      setDescription("");
      setStatus("todo");
    }
  }, [taskToEdit]);

  const handleSubmitTask = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const taskData = { title, description, status };

    try {
      if (taskToEdit && taskToEdit._id) {
        await fetch(`/api/tasks/${taskToEdit._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(taskData),
        });
        setTaskToEdit(null);
      } else {
        await fetch(`/api/tasks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(taskData),
        });
      }
      fetchTasks();
      setTaskToEdit(null);
    } catch (error) {
      console.log("failed to add/update task", error);
    } finally {
      onClose();
    }
  };

  return (
    <div className="container-popup">
      <div className="popup-box">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            color: "black",
          }}
          onClick={onClose}
        >
          <RxCross1
            style={{ fontSize: "1.5rem", cursor: "pointer", margin: "5px" }}
          />
        </div>

        <h4>{taskToEdit && taskToEdit._id ? "Update a task" : "Add a task"}</h4>

        <form onSubmit={handleSubmitTask} className="create-form">
          <input
            type="text"
            placeholder="title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div className="status-box">
            <label>Status:</label>
            <input
              type="radio"
              name="status"
              id="todo"
              value="todo"
              checked={status === "todo"}
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="todo" className="todo-checked checked">
              todo
            </label>
            <input
              type="radio"
              name="status"
              id="inprogress"
              value="inprogress"
              checked={status === "inprogress"}
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="inprogress" className="inprogress-checked checked">
              inprogress
            </label>
            <input
              type="radio"
              name="status"
              id="done"
              value="done"
              checked={status === "done"}
              onChange={(e) => setStatus(e.target.value)}
            />
            <label htmlFor="done" className="done-checked checked">
              done
            </label>
          </div>

          <button type="submit">
            {taskToEdit && taskToEdit._id ? "Update" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewPopup;
