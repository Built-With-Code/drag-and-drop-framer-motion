import { Task } from "@/db/tasks";
import { Checkbox } from "./ui/checkbox";
import { Reorder, useMotionValue } from "framer-motion";
import { useRaisedShadow } from "@/lib/use-raised-shadow";

const TaskItem = ({ task }: { task: Task }) => {
  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);

  return (
    <Reorder.Item
      className="items-top flex space-x-2"
      value={task}
      style={{ boxShadow, y }}
    >
      <Checkbox id="terms1" checked={task.completed} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {task.label}
        </label>
      </div>
    </Reorder.Item>
  );
};

export default TaskItem;
