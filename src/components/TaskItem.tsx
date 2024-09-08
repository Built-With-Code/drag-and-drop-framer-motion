import { Task } from "@/db/tasks";
import { Checkbox } from "./ui/checkbox";

const TaskItem = ({ task }: { task: Task }) => {
  return (
    <div className="items-top flex space-x-2">
      <Checkbox id="terms1" checked={task.completed} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {task.label}
        </label>
      </div>
    </div>
  );
};

export default TaskItem;
