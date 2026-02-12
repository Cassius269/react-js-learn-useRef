import { useState } from "react";
import styles from '../assets/styles/layouts/Counter.module.scss';

function Counter() {
  // Gestion d'état local du compteur
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <h2>Compteur</h2>
        <article className="m-auto p-3 rounded-3 d-flex flex-column align-items-center gap-3 bg-danger">
          <p className="fs-1 text-white">{count}</p>
          <button
            onClick={() => setCount(count + 1)}
            className="btn btn-primary text-white"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1 < 0 ? 0 : count - 1)}
            className="btn btn-primary text-white"
          >
            -
          </button>
        </article>
      </section>
    </>
  );
}

export default Counter;
