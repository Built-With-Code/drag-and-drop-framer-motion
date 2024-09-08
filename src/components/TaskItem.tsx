import { Task } from "@/db/tasks";
import { Checkbox } from "./ui/checkbox";
import { Reorder, useDragControls } from "framer-motion";
import { MutableRefObject } from "react";

const TaskItem = ({
  task,
  container,
}: {
  task: Task;
  container: MutableRefObject<null>;
}) => {
  const controls = useDragControls();

  return (
    <Reorder.Item
      className="flex items-center gap-2 px-3 py-2 bg-white"
      value={task}
      whileDrag={{
        scale: 1.05,
        boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
      }}
      dragListener={false}
      dragControls={controls}
      dragConstraints={container}
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
