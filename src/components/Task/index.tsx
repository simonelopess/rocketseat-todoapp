import styles from "./Task.module.css";
import trashIcon from "../../assets/icons/trash.svg";

type TaskItemsProps = {
  data: {
    id: number;
    task: string;
  };
};

export const Task = ({ data }: TaskItemsProps) => {
  return (
    <div className={styles.container}>
      <input type="checkbox" name="check-item" />
      <label>{data.task}</label>
      <img src={trashIcon} alt="deletar item" className={styles.trashIcon} />
    </div>
  );
};
