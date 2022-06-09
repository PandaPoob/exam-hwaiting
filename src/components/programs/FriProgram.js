import { Link } from "react-router-dom";

export default function FriProgram({ cleanSchedule }) {
  //filter to my desired stages
  let friMid = [];
  let friVan = [];
  let friJot = [];

  cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "fri") {
      friMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "fri") {
      friVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "fri") {
      friJot.push(el);
    }
  });

  //making my list items
  //midgard
  let friMidList = [];

  friMid.forEach((a) => {
    friMidList.push(
      <Link
        key={a.act}
        /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
        to={`/artists/${a.act.replace(/\s+/g, "+")}`}
      >
        <li>
          <h3>{a.act}</h3>
          <h4>
            {a.stage} - {a.start}
          </h4>
        </li>
      </Link>
    );
  });

  //vanaheim
  let friVanList = [];

  friVan.forEach((a) => {
    friVanList.push(
      <Link
        key={a.act}
        /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
        to={`/artists/${a.act.replace(/\s+/g, "+")}`}
      >
        <li>
          <h3>{a.act}</h3>
          <h4>
            {a.stage} - {a.start}
          </h4>
        </li>
      </Link>
    );
  });

  //Jotunheim
  let friJotList = [];

  friJot.forEach((a) => {
    friJotList.push(
      <Link
        key={a.act}
        /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
        to={`/artists/${a.act.replace(/\s+/g, "+")}`}
      >
        <li>
          <h3>{a.act}</h3>
          <h4>
            {a.stage} - {a.start}
          </h4>
        </li>
      </Link>
    );
  });

  return (
    <section id="friday-section" className="day-section friday-section">
      <h2>Friday 12/8</h2>
      <hr></hr>
      <div className="scene-container">
        <article className="scene-article">
          <ul className="program-listitem">{friMidList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem_2">{friVanList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem">{friJotList}</ul>
        </article>
      </div>
    </section>
  );
}
