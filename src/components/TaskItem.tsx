import { Task } from "@/db/tasks";
import { Checkbox } from "./ui/checkbox";
import { Reorder, useDragControls, useMotionValue } from "framer-motion";
import { useDragStyle } from "@/lib/use-drag-style";

const TaskItem = ({ task }: { task: Task }) => {
  const y = useMotionValue(0);
  const boxShadow = useDragStyle(
    y,
    "0px 0px 0px rgba(0,0,0,0.2)",
    "0px 4px 10px rgba(0,0,0,0.3)"
  );
  const scale = useDragStyle(y, 1.0, 1.05);
  const controls = useDragControls();

  return (
    <Reorder.Item
      className="flex items-center gap-2 px-3 py-2 bg-white"
      value={task}
      style={{ boxShadow, y, scale }}
      dragListener={false}
      dragControls={controls}
    >
      <Checkbox id={`task-${task.id}`} checked={task.completed} />
      <div className="flex-1" onPointerDown={(e) => controls.start(e)}>
        <label
          htmlFor={`task-${task.id}`}
          className={`font-normal select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            task.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          {task.label}
        </label>
      </div>
    </Reorder.Item>
  );
};

export default TaskItem;
