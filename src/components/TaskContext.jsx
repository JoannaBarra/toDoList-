import React, { createContext, useContext, useState } from "react";
import { taches as tacheList } from "../taches";
import TaskList from "./TaskList";
export const TaskContext = createContext();
export default function TaskProvider({ children }) {
  const { taches, setTaches } = useState(tacheList);
  return (
    <TaskContext.Provider value={{ taches, setTaches }}>
      {children}
    </TaskContext.Provider>
  );
}
