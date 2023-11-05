import { useState } from "react";
import styles from "./Task.module.css";
import trashIcon from "../../assets/icons/trash.svg";

type TaskItemsProps = {
  data: {
    id: number;
    task: string;
  };
};

export const Task = ({ data }: TaskItemsProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.container}>
      <input type="checkbox" name="checkItem" onChange={handleCheckboxChange} />
      <label className={isChecked ? styles.textTask : ""}>{data.task}</label>
      <img src={trashIcon} alt="deletar item" className={styles.trashIcon} />
    </div>
  );
};
