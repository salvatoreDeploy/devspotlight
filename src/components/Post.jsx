import { Avatar } from "./Avatar";
import { Commnent } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/salvatoreDeploy.png" />
          <div className={styles.authorinfo}>
            <strong>Henrique Araujo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="18 de Setembro às 10:33" dateTime="2023-09-18 10:33:32">
          Publlicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no
        </p>
        <p>
          NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 {""}
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>
          <a href="">#nlw </a>
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu Comentario</strong>
        <textarea placeholder="Deixe um comentario..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Commnent />
        <Commnent />
        <Commnent />
      </div>
    </article>
  );
}
