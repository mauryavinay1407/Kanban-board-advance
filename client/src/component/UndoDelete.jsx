import React, { useEffect, useState } from "react";
import { useTasks } from "../context/TaskContext";
import { MdUndo } from "react-icons/md";

const UndoDelete = () => {
  const { undoDelete, showUndoDelete } = useTasks();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (showUndoDelete) {
      setCountdown(5);
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      setTimeout(() => clearInterval(interval), 5000);
      return () => clearInterval(interval);
    }
  }, [showUndoDelete]);

  if (!showUndoDelete) return null;

  // adding a wrapper for   
  return (
    <div className="undo-box">
      <p>
        Deleting task... <span className="undo-timer">{countdown}'s</span>{" "}
      </p>
      <div onClick={undoDelete}>
        <button>Undo </button>
        <MdUndo size={24} />
      </div>
    </div>
  );
};

export default UndoDelete;
