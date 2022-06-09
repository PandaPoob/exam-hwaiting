import { Link } from "react-router-dom";

export default function SunProgram({ cleanSchedule }) {
  //filter to my desired stages
  let sunMid = [];
  let sunVan = [];
  let sunJot = [];

  cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "sun") {
      sunMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "sun") {
      sunVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "sun") {
      sunJot.push(el);
    }
  });

  //making my list items
  //midgard
  let sunMidList = [];

  sunMid.forEach((a) => {
    sunMidList.push(
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
  let sunVanList = [];

  sunVan.forEach((a) => {
    sunVanList.push(
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
  let sunJotList = [];

  sunJot.forEach((a) => {
    sunJotList.push(
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
    <section id="sunday-section" className="day-section sunday-section">
      <h2>Sunday 14/8</h2>
      <hr></hr>
      <div className="scene-container">
        <article className="scene-article">
          <ul className="program-listitem">{sunMidList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem_2">{sunVanList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem">{sunJotList}</ul>
        </article>
      </div>
    </section>
  );
}
