/* eslint-disable no-unused-vars */
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

  return (
    <section className="mb-20" id="tasks">
      {showModal && <AddTaskModal />}
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox />
        </div>

        <div className="rounded-xl border border-[rgba(151,114,114,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setShowModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
