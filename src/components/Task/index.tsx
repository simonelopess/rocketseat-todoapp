import { useState } from "react";
import styles from "./Task.module.css";
import trashIcon from "../../assets/icons/trash.svg";

type TaskItemsProps = {
  data: {
    id: number;
    task: string;
  };
  isDoneCount: number;
  handleDeteleTask: (id: number) => void;
  setIsDoneCount: (count: number) => void;
};

export const Task = (props: TaskItemsProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);

    if (!isChecked) {
      props.setIsDoneCount(props.isDoneCount + 1);
    }

    if (isChecked && props.isDoneCount > 0) {
      props.setIsDoneCount(props.isDoneCount - 1);
    }
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
