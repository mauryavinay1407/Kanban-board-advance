import { createContext, useContext, useState } from "react";

// create context
const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const openPopup = (task = null) => {
    setTaskToEdit(task);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setTaskToEdit(null);
    setIsPopupOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{ isPopupOpen, taskToEdit, setTaskToEdit, openPopup, closePopup }}
    >
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);
