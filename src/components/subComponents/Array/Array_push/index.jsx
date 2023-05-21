/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './index.module.css';

const ArrayPush = () => {
  return (
    <>
      <aside>
        <div className={styles.titleSection}>
          <h2>
            Manipuler des tableaux avec la méthode <span className={styles.h2Span}>&nbsp;push</span>
          </h2>
        </div>
        <p className={styles.parag}>
          Un moyen simple d'ajouter des données à la fin d'un tableau consiste à utiliser la
          fonction push().
        </p>
        <p className={styles.parag}>
          push() prend un ou plusieurs paramètres et les "pousse" à la fin du tableau.
        </p>
        <p className={styles.paragEx}>Exemples :</p>
        <div className={styles.contentParag}>
          <p>const arr1 = [1, 2, 3];</p>
          <p>arr1.push(4);</p>
          <p>
            console.log(arr1); <span className={styles.paragSpan}>// [ 1, 2, 3, 4 ]</span>
          </p>
        </div>

        <div className={styles.contentParag}>
          <p>const arr2 = ["Stimpson", "J", "cat"];</p>
          <p>arr2.push(["happy", "joy"]);</p>
          <p>
            console.log(arr2);{' '}
            <span className={styles.paragSpan}>
              // [ 'Stimpson', 'J', 'cat', [ 'happy', 'joy' ] ]
            </span>
          </p>
        </div>
      </aside>
    </>
  );
};

export default ArrayPush;
