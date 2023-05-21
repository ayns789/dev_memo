/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './index.module.css';

const ArrayShift = () => {
  return (
    <>
      <aside>
        <div className={styles.titleSection}>
          <h2>
            Manipuler des tableaux avec la méthode{' '}
            <span className={styles.h2Span}>&nbsp;shift</span>
          </h2>
        </div>
        <p className={styles.parag}>
          pop()supprime toujours le dernier élément d'un tableau. Et si vous voulez supprimer le
          premier ?
        </p>
        <p className={styles.parag}>
          C'est là .shift()qu'intervient. Cela fonctionne exactement comme .pop(), sauf qu'il
          supprime le premier élément au lieu du dernier.
        </p>
        <p className={styles.paragEx}>Exemples :</p>
        <div className={styles.contentParag}>
          <p>const ourArray = ["Stimpson", "J", ["cat"]];</p>
          <p>const removedFromOurArray = ourArray.shift();</p>
          <p>
            console.log(ourArray ); <span className={styles.paragSpan}>// ["J", ["cat"]]</span>
          </p>
          <p>
            console.log(removedFromOurArray); <span className={styles.paragSpan}>// Stimpson</span>
          </p>
        </div>
      </aside>
    </>
  );
};

export default ArrayShift;
