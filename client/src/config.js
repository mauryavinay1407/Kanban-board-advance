// config.js
export const BASE_URL = import.meta.env.DEV
  ? "http://localhost:3000"  // Local backend
  : "https://kanban-board-advance.onrender.com"; // Deployed backend
