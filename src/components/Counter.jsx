import { useRef } from "react";
import styles from '../assets/styles/layouts/Counter.module.scss';

function Counter() {
    console.log('render');

    // Gestion de la réference du compteur
    const count = useRef(0);
    console.log(count); // React ne peut pas accéder directement à la réference pour le lire dans le markup, seule la valeur sera lu mais pas de re-rendu

    // Gestionnairez d'évenement
    const handleClickIncrement = () =>{ 
        count.current++; // incrémentation de la valeur courante du courante
        console.log(`Compteur : ${count.current}`)
    };

    const handleClickDecrement = () =>{ 
        count.current <= 0 ? count.current = 0 : count.current--; // décrementer uniquement si superieur à zéro
        console.log(`Compteur : ${count.current}`)
    };

    // Retourner le markup de rendu
  return (
    <>
      <section>
        <h2 className="text-center mb-3 mt-5">Compteur</h2>
        <article className={`m-auto p-3 rounded-3 d-flex flex-column align-items-center gap-3 bg-danger ${styles.article}`}>
          <button
            onClick={handleClickIncrement}
            className="btn btn-primary text-white"
          >
            +
          </button>
          <button
            onClick={handleClickDecrement}
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
