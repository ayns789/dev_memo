/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './index.module.css';

const ArrayUnshift = () => {
  return (
    <>
      <aside>
        <div className={styles.titleSection}>
          <h2>
            Manipuler des tableaux avec la méthode
            <span className={styles.h2Span}>&nbsp;unshift</span>
          </h2>
        </div>
        <p className={styles.parag}>
          Non seulement vous pouvez shift / retirer des éléments au début d'un tableau, mais vous
          pouvez également unshift / ajouter des éléments au début d'un tableau.
        </p>
        <p className={styles.parag}>
          .unshift() fonctionne exactement comme .push(), mais au lieu d'ajouter l'élément à la fin
          du tableau, unshift() ajoute l'élément au début du tableau.
        </p>
        <p className={styles.paragEx}>Exemples :</p>
        <div className={styles.contentParag}>
          <p>const ourArray = ["Stimpson", "J", "cat"];</p>
          <p>ourArray.shift();</p>
          <p>
            console.log(ourArray); <span className={styles.paragSpan}>// ["J", "cat"]</span>
          </p>
          <p>ourArray.unshift("Happy");</p>
          <p>
            console.log(ourArray);{' '}
            <span className={styles.paragSpan}>// ["Happy", "J", "cat"]</span>
          </p>
        </div>
      </aside>
    </>
  );
};

export default ArrayUnshift;

////////////
////////////
////////////
// accessibilité dans les tableaux imbriqués :
// const ourPets = [
//   {
//     animalType: "cat",
//     names: [
//       "Meowzer",
//       "Fluffy",
//       "Kit-Cat"
//     ]
//   },
//   {
//     animalType: "dog",
//     names: [
//       "Spot",
//       "Bowser",
//       "Frankie"
//     ]
//   }
// ];

// ourPets[0].names[1];
// ourPets[1].names[0];
// //////////
// autre exemple :
// const myPlants = [
//   {
//     type: "flowers",
//     list: ["rose", "tulip", "dandelion"]
//   },
//   {
//     type: "trees",
//     list: ["fir", "pine", "birch"]
//   }
// ];

// const secondTree = myPlants[1].list[1];
// ///////////////////

// ///////////////
// exercices objet :
// 1/ créer une fonction update objet :
// instructions :
// _ Votre fonction doit toujours retourner l' recordsobjet entier.
// _ Si valueest une chaîne vide, supprime la proppropriété donnée de l'album.
// _ Si propn'est pas trackset valuen'est pas une chaîne vide, attribuez le valueau fichier prop.
// _ Si propest trackset valeur n'est pas une chaîne vide, ajoutez le valueà la fin du trackstableau de l'album. Vous devez d'abord créer ce tableau si l'album n'a pas de trackspropriété.

// résultat :
// const recordCollection = {
//   2548: {
//     albumTitle: 'Slippery When Wet',
//     artist: 'Bon Jovi',
//     tracks: ['Let It Rock', 'You Give Love a Bad Name']
//   },
//   2468: {
//     albumTitle: '1999',
//     artist: 'Prince',
//     tracks: ['1999', 'Little Red Corvette']
//   },
//   1245: {
//     artist: 'Robert Palmer',
//     tracks: []
//   },
//   5439: {
//     albumTitle: 'ABBA Gold'
//   }
// };

// function updateRecords(records, id, prop, value) {
//   if (value === '') {
//     delete records[id][prop];
//   } else if (prop === "tracks") {
//     records[id][prop] = records[id][prop] || [];
//     records[id][prop].push(value);
//   } else {
//     records[id][prop] = value;
//   }
//   return records;
// }

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// //////////////
