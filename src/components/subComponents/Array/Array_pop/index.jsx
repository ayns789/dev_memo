/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './index.module.css';

const ArrayPop = () => {
  return (
    <>
      <aside>
        <div className={styles.titleSection}>
          <h2>
            Manipuler des tableaux avec la méthode<span className={styles.h2Span}>&nbsp;pop</span>
          </h2>
        </div>
        <p className={styles.parag}>
          Une autre façon de modifier les données dans un tableau consiste à utiliser la
          .pop()fonction.
        </p>
        <p className={styles.parag}>
          .pop()est utilisé pour faire apparaître une valeur à la fin d'un tableau. Nous pouvons
          stocker cette valeur supprimée en l'affectant à une variable. En d'autres termes,
          .pop()supprime le dernier élément d'un tableau et renvoie cet élément.
        </p>
        <p className={styles.paragEx}>Exemples :</p>
        <div className={styles.contentParag}>
          <p>const threeArr = [1, 4, 6];</p>
          <p>const oneDown = threeArr.pop();</p>
          <p>
            console.log(oneDown); <span className={styles.paragSpan}>// 6</span>
          </p>
          <p>
            console.log(threeArr); <span className={styles.paragSpan}>// [1, 4]</span>
          </p>
        </div>
      </aside>
    </>
  );
};

export default ArrayPop;
