"use client";

import TaskItem from "@/components/TaskItem";
import { taskData } from "@/db/tasks";
import { Reorder } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(taskData);

  return (
    <div className="flex flex-col gap-8 min-h-screen p-20">
      <h1 className="text-4xl font-semibold">Tasks</h1>
      <Reorder.Group className="space-y-4" values={tasks} onReorder={setTasks}>
        {tasks.map((t) => (
          <TaskItem task={t} key={t.id} />
        ))}
      </Reorder.Group>
    </div>
  );
}
