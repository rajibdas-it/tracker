import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

const TaskBoard = () => {
  const defultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium laborum qui illum velit officiis nesciunt quia praesentium dolorum reiciendis!",
    tags: ["Web", "react", "javaScript"],
    priority: "High",
    isFavorite: false,
  };

  const [tasks, setTasks] = useState([defultTask]);
  const [showModal, setShowModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const handleAddTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      // const updatedTask = tasks.map((task) => {
      //   if (task.id === newTask.id) {
      //     return newTask;
      //   }
      //   return task;
      // });
      // setTasks(updatedTask);
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setShowModal(false);
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
    setTaskToUpdate(null);
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const handleDeleteAllTask = () => {
    tasks.length = 0;
    setTasks([...tasks]);
  };

  const handleFavTask = (taskId) => {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  };

  const handleSearch = (value) => {
    const filteredTask = tasks.filter((task) =>
      task.title.toLowerCase().includes(value.toLowerCase())
    );

    setTasks([...filteredTask]);
  };

  return (
    <section className="mb-20" id="tasks">
      {showModal && (
        <AddTaskModal
          onSave={handleAddTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleCloseClick}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox onTaskSearch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(151,114,114,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions
            onAddClick={() => setShowModal(true)}
            onDeleteAllTask={handleDeleteAllTask}
          />
          {tasks.length > 0 ? (
            <TaskList
              tasks={tasks}
              onEdit={handleEditTask}
              onDeleteTask={handleDeleteTask}
              onFav={handleFavTask}
            />
          ) : (
            "No Task Founds"
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
