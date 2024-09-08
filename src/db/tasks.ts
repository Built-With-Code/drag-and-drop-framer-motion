export type Task = {
  id: number;
  label: string;
  completed: boolean;
};

export const tasks: Task[] = [
  {
    id: 1,
    label: "Learn Next.js",
    completed: true,
  },
  {
    id: 2,
    label: "Learn Framer Motion",
    completed: true,
  },
  {
    id: 3,
    label: "Make $1M dollars",
    completed: false,
  },
];
