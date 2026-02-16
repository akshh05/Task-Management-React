import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Finish UI",
      description: "Improve dashboard UI",
      status: "TODO",
      dueDate: "2026-02-10",
    },
    {
      id: "2",
      title: "Fix routing",
      description: "Debug TaskDetails page",
      status: "IN_PROGRESS",
      dueDate: "2026-02-11",
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Vercel deployment",
      status: "DONE",
      dueDate: "2026-02-12",
    },
    {
      id: "4",
      title: "Refactor GlobalContext",
      description: "Clean up state logic",
      status: "TODO",
      dueDate: "2026-02-13",
    },
    {
      id: "5",
      title: "Add edit dialog",
      description: "Edit task from details page",
      status: "IN_PROGRESS",
      dueDate: "2026-02-14",
    },
    {
      id: "6",
      title: "Style MenuBox",
      description: "Improve menu hover and spacing",
      status: "TODO",
      dueDate: "2026-02-15",
    },
    {
      id: "7",
      title: "Upcoming tasks widget",
      description: "Show nearest due tasks on dashboard",
      status: "TODO",
      dueDate: "2026-02-16",
    },
    {
      id: "8",
      title: "Status flow check",
      description: "Ensure TODO → IN_PROGRESS → DONE",
      status: "DONE",
      dueDate: "2026-02-17",
    },
    {
      id: "9",
      title: "Add delete confirmation",
      description: "Confirm before removing task",
      status: "IN_PROGRESS",
      dueDate: "2026-02-18",
    },
    {
      id: "10",
      title: "Polish dashboard",
      description: "Spacing, colors, responsiveness",
      status: "TODO",
      dueDate: "2026-02-19",
    },
  ]);

  
  const addTask = (task) => {
    setTasks(prev => [
      ...prev,
      {
        ...task,
        id: String(task.id), 
      },
    ]);
  };

  
  const updateStatus = (id) => {
    setTasks(prev =>
      prev.map(task => {
        if (task.id !== id) return task;

        if (task.status === "TODO")
          return { ...task, status: "IN_PROGRESS" };

        if (task.status === "IN_PROGRESS")
          return { ...task, status: "DONE" };

        return task;
      })
    );
  };


  const updateTask = (updatedTask) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === updatedTask.id
          ? { ...updatedTask }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const upcomingTasks = tasks
    .filter(t => t.status !== "DONE")
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
    .slice(0, 4);

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        addTask,
        updateStatus,
        updateTask,
        deleteTask,
        upcomingTasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => useContext(GlobalContext);
