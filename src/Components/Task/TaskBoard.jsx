/* eslint-disable no-unused-vars */
import { useState } from "react";
import SearchBox from "./SearchBox";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

const TaskBoard = () => {
  const defultTask = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium laborum qui illum velit officiis nesciunt quia praesentium dolorum reiciendis!",
    tags: ["Web", "react", "javaScript"],
    priority: "High",
    isFav: false,
  };

  const [tasks, setTasks] = useState([defultTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
