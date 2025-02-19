import "./App.css";
import KanbanBoard from "./component/KanbanBoard";
import { TaskProvider } from "./context/TaskContext";
import "./styles/Kanban.scss";
import "./styles/CreateForm.scss";
import { PopupProvider } from "./context/PopupContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <TaskProvider>
        <PopupProvider>
          <KanbanBoard />
        </PopupProvider>
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
