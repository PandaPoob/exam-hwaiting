import { Link } from "react-router-dom";

export default function SatProgram({ cleanSchedule }) {
  //filter to my desired stages
  let satMid = [];
  let satVan = [];
  let satJot = [];

  cleanSchedule.forEach((el) => {
    if (el.stage === "Midgard" && el.day === "sat") {
      satMid.push(el);
    } else if (el.stage === "Vanaheim" && el.day === "sat") {
      satVan.push(el);
    } else if (el.stage === "Jotunheim" && el.day === "sat") {
      satJot.push(el);
    }
  });

  //making my list items
  //midgard
  let satMidList = [];

  satMid.forEach((a) => {
    satMidList.push(
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
  let satVanList = [];

  satVan.forEach((a) => {
    satVanList.push(
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
  let satJotList = [];

  satJot.forEach((a) => {
    satJotList.push(
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
    <section id="saturday-section" className="day-section saturday-section">
      <h2>Saturday 13/8</h2>
      <hr></hr>
      <div className="scene-container">
        <article className="scene-article">
          <ul className="program-listitem">{satMidList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem_2">{satVanList}</ul>
        </article>
        <article className="scene-article">
          <ul className="program-listitem">{satJotList}</ul>
        </article>
      </div>
    </section>
  );
}
