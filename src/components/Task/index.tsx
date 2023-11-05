import { useState } from "react";
import styles from "./Task.module.css";
import trashIcon from "../../assets/icons/trash.svg";

type TaskItemsProps = {
  data: {
    id: number;
    task: string;
  };
  handleDeteleTask: (id: number) => void;
};

export const Task = (props: TaskItemsProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.container}>
      <input type="checkbox" name="checkItem" onChange={handleCheckboxChange} />
      <label className={isChecked ? styles.textTask : ""}>
        {props.data.task}
      </label>
      <img
        src={trashIcon}
        alt="deletar item"
        className={styles.trashIcon}
        onClick={() => props.handleDeteleTask(props.data.id)}
      />
    </div>
  );
};
