import { Link } from "react-router-dom";

export default function ThuProgram({ cleanSchedule }) {
  //filter to my desired stages
  let thuMid = [];
  let thuVan = [];
  let thuJot = [];

  cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "thu") {
      thuMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "thu") {
      thuVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "thu") {
      thuJot.push(el);
    }
  });

  //making my list items
  //midgard
  let thuMidList = [];

  thuMid.forEach((a) => {
    thuMidList.push(
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
  let thuVanList = [];

  thuVan.forEach((a) => {
    thuVanList.push(
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
  let thuJotList = [];

  thuJot.forEach((a) => {
    thuJotList.push(
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
    <section id="thursday-section" className="day-section thursday-section">
      <h2>Thursday 11/8</h2>
      <hr></hr>
      <div className="scene-container">
        <article className="scene-article">
          <ul className="program-listitem">{thuMidList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem_2">{thuVanList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem">{thuJotList}</ul>
        </article>
      </div>
    </section>
  );
}
