import styles from "./Task.module.css";
import trashIcon from "../../assets/icons/trash.svg";

type TaskItemsProps = {
  data: {
    id: number;
    task: string;
  };
};

export const Task = ({ data }: TaskItemsProps) => {
  console.log("data", data);
  return (
    <div className={styles.container}>
      <input type="checkbox" name="check-item" />
      <label>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </label>
      <img src={trashIcon} alt="deletar item" className={styles.trashIcon} />
    </div>
  );
};
