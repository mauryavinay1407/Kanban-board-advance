import { createContext, useContext, useState, useEffect } from "react";
import { BASE_URL } from "../config";
// create context
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState({ todo: [], inprogress: [], done: [] });
  const [undoTimer,setUndoTimer] = useState(null);
  const [deletedTask,setDeletedTask] = useState(null);
  const [showUndoDelete,setShowUndoDelete] = useState(false);

  // Fetch tasks from the backend

  const fetchTasks = async(filter = "")=>{
      try {
        const url = filter.trim() ? `${BASE_URL}/api/tasks?filter=${encodeURIComponent(filter)}` : `${BASE_URL}/api/tasks`;

        const response = await fetch(url);
        const data = await response.json();

        const organizedTasks = {todo: [],inprogress:[],done:[]};
        data.tasks.forEach((task)=>{
          if (organizedTasks[task.status]) {
                    organizedTasks[task.status].push(task);
          }
        });
        setTasks(organizedTasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
  }

  // temporary delete task
  const deleteTask= (taskId)=>{
    const task = Object.values(tasks).flat().find(entry => entry._id === taskId);
    
    setTasks((prev) =>{
      const updatedTask = {...prev,[task.status]:prev[task.status].filter(entry => entry._id !== taskId)}
      return updatedTask;
    });
    
    setDeletedTask(task); 
    setShowUndoDelete(true);  // for showing the undo popup
    
    const timer = setTimeout(()=>{
      permanentDelete(taskId)
      setDeletedTask(null);
      setShowUndoDelete(false);
      },5000);
      
      setUndoTimer(timer);
    }
    
  // undo the deleted task
  const undoDelete = () => {
    if(deletedTask){
      setTasks((prev)=>{
        const updatedTask = {...prev,[deletedTask.status]:[...prev[deletedTask.status],deletedTask]};
        return updatedTask;
      });
      setDeletedTask(null);
      clearTimeout(undoTimer);
    }
  }
  // permanently deleting the task
  const permanentDelete = async(taskId)=>{
    try {
      await fetch(`${BASE_URL}/api/tasks/${taskId}`,{
        method: 'DELETE',
      });
      fetchTasks();
    } catch (error) {
      console.log('failed to delete task',error);
    }
  }

  // Fetch tasks when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, fetchTasks, deleteTask, undoDelete, deletedTask, showUndoDelete}}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook
export const useTasks = () => useContext(TaskContext);
