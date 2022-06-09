import { Link } from "react-router-dom";

export default function MonProgram({ cleanSchedule }) {
  // console.log(schedule);

  //filter to my desired stages
  let monMid = [];
  let monVan = [];
  let monJot = [];

  cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "mon") {
      monMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "mon") {
      monVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "mon") {
      monJot.push(el);
    }
  });

  //making my list items
  //midgard
  let monMidList = [];

  monMid.forEach((a) => {
    monMidList.push(
      <Link
        key={a.act}
        /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
        to={`/artists/${a.act.replace(/\s+/g, "+")}`}
      >
        <h3>{a.act}</h3>
        <h4>
          {a.stage} - {a.start}
        </h4>
      </Link>
    );
  });

  //vanaheim
  let monVanList = [];

  monVan.forEach((a) => {
    monVanList.push(
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
  let monJotList = [];

  monJot.forEach((a) => {
    monJotList.push(
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
    <section id="monday-section" className="day-section monday-section">
      <h2>Monday 8/8</h2>
      <hr></hr>
      <div className="scene-container">
        <article className="scene-article">
          <ul className="program-listitem">{monMidList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem_2">{monVanList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem">{monJotList}</ul>
        </article>
      </div>
    </section>
  );
}
