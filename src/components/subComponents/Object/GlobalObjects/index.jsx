/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './index.module.css';

const ArrayUnshift = () => {
  return (
    <>
      <aside>
        <div className={styles.titleSection}>
          <h2>
            Les
            <span className={styles.h2Span}>&nbsp;objets</span>
          </h2>
        </div>

        <div className={styles.contentParag}>
          <p>const ourDog = &#123;</p>
          <p> &emsp;"name": "Camper",</p>
          <p> &emsp;"legs": 4,</p>
          <p> &emsp;"tails": 1,</p>
          <p> &emsp;"friends": ["everything!"]</p>
          <p> &#125;;</p>
        </div>

        <p className={styles.parag}>update une valeur d'une propriété d'un objet :</p>
        <div className={styles.contentParag}>
          <p>
            {' '}
            ourDog.name = "Happy Camper";{' '}
            <span className={styles.paragSpan}>//... ou ourDog["name"] = "Happy Camper";</span>
          </p>
        </div>

        <p className={styles.parag}>ajouter une propriété :</p>
        <div className={styles.contentParag}>
          <p>ourDog.bark = "bow-wow";</p>
        </div>

        <p className={styles.parag}>supprimer une propriété :</p>
        <div className={styles.contentParag}>
          <p>delete ourDog.bark;</p>
        </div>

        <p className={styles.parag}>rechercher une valeur dans un objet, par sa propriété :</p>
        <div className={styles.contentParag}>
          <p>function phoneticLookup(val) &#123;</p>
          <p> &emsp;let result = "";</p>
          <p> &emsp;let lookup = &#123;</p>
          <p> &emsp;&emsp;"alpha": "Adams",</p>
          <p> &emsp;&emsp;"bravo": "Boston",</p>
          <p> &emsp;&emsp;"charlie": "Chicago",</p>
          <p> &emsp;&emsp;"delta": "Denver",</p>
          <p> &emsp;&emsp;"echo": "Easy",</p>
          <p> &emsp;&emsp;"foxtrot": "Frank"</p>
          <p> &emsp;&#125;;</p>
          <p> &emsp;result = lookup[val];</p>
          <p> &emsp;return result;</p>
          <p> &#125;;</p>
        </div>

        <p className={styles.parag}>lancer une recherche sur un tableau, par sa propriété :</p>
        <div className={styles.contentParag}>
          <p>const article = &#123;</p>
          <p> &emsp;"title": "How to create objects in JavaScript",</p>
          <p>
            {' '}
            &emsp;"link":
            "https://www.freecodecamp.org/news/a-complete-guide-to-creating-objects-in-javascript-b0e2450655e8/",
          </p>
          <p> &emsp;"author": "Kaashan Hussain",</p>
          <p> &emsp;"language": "JavaScript",</p>
          <p> &emsp;"tags": "TECHNOLOGY",</p>
          <p> &emsp;"createdAt": "NOVEMBER 28, 2018"</p>
          <p> &#125;;</p>
        </div>
        <div className={styles.contentParag}>
          <p>
            const articleAuthor = article["author"];
            <br />
            const articleLink = article["link"];
          </p>
          <p>
            const value = "title";
            <br />
            const valueLookup = article[value];
          </p>
        </div>

        <p className={styles.parag}>rechercher si un objet a une propriété :</p>
        <div className={styles.contentParag}>
          <p>function checkObj(obj, checkProp) &#123;</p>
          <p> &emsp;if (obj.hasOwnProperty(checkProp)) &#123;</p>
          <p> &emsp;&emsp;return obj[checkProp];</p>
          <p> &emsp;&#123; else &#125</p>
          <p> &emsp;&emsp;return "Not Found";</p>
          <p> &emsp;&#125;;</p>
          <p> &#125;;</p>
        </div>

        <p className={styles.parag}>ou :</p>
        <div className={styles.contentParag}>
          <p>const myObj = &#123;</p>
          <p> &emsp;top: "hat",</p>
          <p> &emsp;bottom: "pants"</p>
          <p> &#125;;</p>
        </div>
        <div className={styles.contentParag}>
          <p>
            myObj.hasOwnProperty("top");
            <br />
            myObj.hasOwnProperty("middle");
          </p>
        </div>

        <p className={styles.parag}>accessibilité dans les objets imbriqués :</p>
        <div className={styles.contentParag}>
          <p>const ourStorage = &#123;</p>
          <p> &emsp;"desk": &#123;</p>
          <p> &emsp;&emsp;"drawer": "stapler"</p>
          <p> &emsp;&#125;,</p>

          <p> &emsp;"cabinet": &#123;</p>
          <p> &emsp;&emsp;"top drawer": &#123;</p>
          <p> &emsp;&emsp;&emsp;"folder1": "a file",</p>
          <p> &emsp;&emsp;&emsp;"folder2": "secrets"</p>
          <p> &emsp;&emsp;&#125;,</p>
          <p> &emsp;&emsp;"bottom drawer": "soda"</p>

          <p> &emsp;&#125;;</p>
          <p> &#125;;</p>
        </div>

        <div className={styles.contentParag}>
          <p>
            ourStorage.cabinet["top drawer"].folder2;
            <br />
            ourStorage.desk.drawer;
          </p>
        </div>
      </aside>
    </>
  );
};

export default ArrayUnshift;

//////////////////////
///////////////////////
//////////////////////  style="color:rgb(255,0,0);"
