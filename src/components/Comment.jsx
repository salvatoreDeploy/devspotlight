import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Commnent() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/salvatoreDeploy.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henirque Araujo</strong>
              <time
                title="18 de Setembro às 10:33"
                dateTime="2023-09-18 10:33:32"
              >
                Cerca de 1h atras
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <ThumbsUp /> Aplaudir <span>20</span>
        </footer>
      </div>
    </div>
  );
}
