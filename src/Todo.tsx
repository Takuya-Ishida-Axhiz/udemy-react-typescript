import { FC } from "react";
import { TodoType } from "./types/todo";

export const Todo: FC<TodoType> = (
  props: Pick<TodoType, "userId" | "title" | "completed">
  // props: Omit<TodoType, "id">
) => {
  const { title, userId, completed = false } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return (
    <div>
      <p>{`${completedMark} ${title} ${userId}`}</p>
    </div>
  );
};
