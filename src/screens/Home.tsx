import { FormEvent, useState } from "react";

import LogoComponent from "../components/Logo/Logo";
import Clipboard from "../assets/Clipboard.svg";
import plusIcon from "../assets/icons/plus.svg";

import styles from "./Home.module.css";
import { Task } from "../components/Task";

function Home() {
  type taskProps = {
    id: number;
    task: string;
  };

  const [tasks, setTasks] = useState<taskProps[]>([]);
  const [inputTask, setInputTask] = useState("");

  const handleCreateTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = (event.target as HTMLFormElement).task.value;
    setTasks([...tasks, { id: tasks.length, task: newTask }]);
    setInputTask("");
  };

  const handleDeleteTask = (id: number) => {
    const arrayWithFileDeleted = tasks.filter((item) => item.id !== id);
    setTasks(arrayWithFileDeleted);
  };

  return (
    <>
      <div className={styles.container}>
        <header>
          <LogoComponent />
        </header>
        <div className={styles.content}>
          <form onSubmit={handleCreateTask}>
            <input
              placeholder="Adicione uma nova tarefa"
              name="task"
              value={inputTask}
              onChange={(event) => setInputTask(event.target.value)}
            />
            <button type="submit">
              <span>Criar</span>
              <img src={plusIcon} alt="create todo item icon" />
            </button>
          </form>
          <div className={styles.statusContainer}>
            <div className={styles.status}>
              <div className={styles.createdTasks}>
                <span>Tarefas criadas</span>
                <span>{tasks.length}</span>
              </div>
              <div className={styles.finishedTasks}>
                <span>Concluídas</span>
                <span>0</span>
              </div>
            </div>
          </div>
          {tasks.length === 0 ? (
            <div className={styles.noTasks}>
              <img src={Clipboard} alt="clipboard icon" />
              <p className={styles.noTasksTitle}>
                Você ainda não tem tarefas cadastradas
              </p>
              <p className={styles.noTasksDescription}>
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          ) : (
            <>
              {tasks.map((task) => (
                <Task
                  data={task}
                  key={task.id}
                  handleDeteleTask={handleDeleteTask}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
