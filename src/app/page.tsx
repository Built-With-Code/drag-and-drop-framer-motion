"use client";

import TaskItem from "@/components/TaskItem";
import { taskData } from "@/db/tasks";
import { Reorder } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(taskData);

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="flex flex-col gap-8 w-2/5 min-w-72 border-neutral-100 border-2 rounded-xl p-8 shadow-xl">
        <h1 className="text-4xl font-semibold">Tasks</h1>
        <Reorder.Group
          className="space-y-1"
          values={tasks}
          onReorder={setTasks}
        >
          {tasks.map((t) => (
            <TaskItem task={t} key={t.id} />
          ))}
        </Reorder.Group>
      </div>
    </div>
  );
}
