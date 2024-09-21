import { Task } from "@/db/tasks";
import { Checkbox } from "./ui/checkbox";

const TaskItem = ({
  task,
  toggleTaskComplete,
}: {
  task: Task;
  toggleTaskComplete: () => void;
}) => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white">
      <Checkbox
        id={`task-${task.id}`}
        checked={task.completed}
        onCheckedChange={toggleTaskComplete}
      />
      <div className="flex-1">
        <label
          htmlFor={`task-${task.id}`}
          className={`font-normal select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            task.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          {task.label}
        </label>
      </div>
    </div>
  );
};

export default TaskItem;
