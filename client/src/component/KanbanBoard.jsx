import React from "react";
import CreateButton from "./CreateButton";
import CreateNewPopup from "./CreateNewPopup";
import TaskBox from "./TaskBox";
import { usePopup } from "../context/PopupContext";
import Search from "./Search";
import DarkModeToggle from "./DarkModeToggle";
import { useTasks } from "../context/TaskContext";
import UndoDelete from "./UndoDelete";

const KanbanBoard = () => {
  const { isPopupOpen, openPopup, closePopup } = usePopup();
  const { deletedTask } = useTasks();

  const columns = ["todo", "inprogress", "done"];

  return (
    <div className="kanban-board">
      <h1>Interactive Kanban board</h1>
      <div className="searchbar">
        <CreateButton onClick={openPopup} />
        <Search />
        <DarkModeToggle />
      </div>
      <div className="columns">
        {columns.map((status) => (
          <TaskBox key={status} status={status} />
        ))}
      </div>
      {deletedTask && <UndoDelete />}
      {isPopupOpen && <CreateNewPopup onClose={closePopup} />}
    </div>
  );
};

export default KanbanBoard;
