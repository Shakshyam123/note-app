"use client";

import { useState, useEffect } from "react";

function Note() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(timerId);
  }, []);

  function handleAddTask() {
    setTasks([...tasks, task]);
    setTask("");
  }

  const filteredTasks = tasks.filter((t) =>
    t.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between ml-32 mr-32 mt-10 ">
        <div className="font-extrabold text-3xl">Notes</div>
        <button className="border-2 p-2 rounded-lg">toggle</button>
      </div>
      <input
        type="text"
        placeholder="search"
        className="w-96 m-5 ml-32 mr-3 mt-10 border-2 p-2 rounded-lg"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add a new task"
        className="w-96 m-5 ml-32 mr-3 mt-10 border-2 p-2 rounded-lg"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="bg-green-500 p-2 rounded-lg -mr-28"
        onClick={handleAddTask}
      >
        Add
      </button>
      <div className="flex flex-wrap">
        {filteredTasks.map((task, index) => (
          <div
            key={index}
            className="border-2 w-80 h-72 flex flex-col justify-between p-3 bg-yellow-300 rounded-lg ml-32 mt-4 shadow-lg"
          >
            <div>
              <h1>{task}</h1>
            </div>
            <div className="flex justify-between">
              <div>{currentDate.toLocaleDateString()}</div>
              <div>sdf</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Note;
