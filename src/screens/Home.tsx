import { useState } from "react";

import LogoComponent from "../components/Logo/Logo";
import Clipboard from "../assets/Clipboard.svg";
import plusIcon from "../assets/icons/plus.svg";

import styles from "./Home.module.css";
import { Task } from "../components/Task";

function Home() {
  const [tasks, setStasks] = useState([
    {
      id: 1,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
    {
      id: 1,
      task: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
    },
  ]);

  return (
    <>
      <div className={styles.container}>
        <header>
          <LogoComponent />
        </header>
        <div className={styles.content}>
          <form>
            <input placeholder="Adicione uma nova tarefa" />
            <button>
              <span>Criar</span>
              <img src={plusIcon} alt="create todo item icon" />
            </button>
          </form>
          <div className={styles.statusContainer}>
            <div className={styles.status}>
              <div className={styles.createdTasks}>
                <span>Tarefas criadas</span>
                <span>0</span>
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
                <Task data={task} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
