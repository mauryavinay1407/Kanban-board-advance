import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
const CreateButton = ({ onClick }) => {
  return (
    <button className="create-btn" onClick={onClick}>
      <div>Create New Task <IoIosAddCircleOutline size={20}/></div>
    </button>
  );
};

export default CreateButton;
