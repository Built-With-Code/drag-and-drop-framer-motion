import TaskItem from "@/components/TaskItem";
import { tasks } from "@/db/tasks";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 min-h-screen p-20">
      <h1 className="text-4xl font-semibold">Tasks</h1>
      <div className="space-y-4">
        {tasks.map((t) => (
          <TaskItem task={t} key={t.id} />
        ))}
      </div>
    </div>
  );
}
