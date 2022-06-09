import { Link } from "react-router-dom";

export default function TueProgram({ cleanSchedule }) {
  //filter to my desired stages
  let tueMid = [];
  let tueVan = [];
  let tueJot = [];

  cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "tue") {
      tueMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "tue") {
      tueVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "tue") {
      tueJot.push(el);
    }
  });

  //making my list items
  //midgard
  let tueMidList = [];

  tueMid.forEach((a) => {
    tueMidList.push(
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
  let tueVanList = [];

  tueVan.forEach((a) => {
    tueVanList.push(
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
  let tueJotList = [];

  tueJot.forEach((a) => {
    tueJotList.push(
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
    <section id="tuesday-section" className="day-section tuesday-section">
      <h2>Tuesday 9/8</h2>
      <hr></hr>
      <div className="scene-container">
        <article className="scene-article">
          <ul className="program-listitem">{tueMidList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem_2">{tueVanList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem">{tueJotList}</ul>
        </article>
      </div>
    </section>
  );
}
