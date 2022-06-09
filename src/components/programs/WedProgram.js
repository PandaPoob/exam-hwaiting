import { Link } from "react-router-dom";

export default function WedProgram({ cleanSchedule }) {
  //filter to my desired stages
  let wedMid = [];
  let wedVan = [];
  let wedJot = [];

  cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "wed") {
      wedMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "wed") {
      wedVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "wed") {
      wedJot.push(el);
    }
  });

  //making my list items
  //midgard
  let wedMidList = [];

  wedMid.forEach((a) => {
    wedMidList.push(
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
  let wedVanList = [];

  wedVan.forEach((a) => {
    wedVanList.push(
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
  let wedJotList = [];

  wedJot.forEach((a) => {
    wedJotList.push(
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
    <section id="wednesday-section" className="day-section wednesday-section">
      <h2>wednesday 10/8</h2>
      <hr></hr>
      <div className="scene-container">
        <article className="scene-article">
          <ul className="program-listitem">{wedMidList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem_2">{wedVanList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem">{wedJotList}</ul>
        </article>
      </div>
    </section>
  );
}
