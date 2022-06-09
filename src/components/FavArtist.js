import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import faved from "../images/faved.svg";

export default function FavArtist({ artist, fav, setFav }) {
  const favListCard = useRef();

  useEffect(() => {});

  function removeFav() {
    const favList = favListCard.current;
    gsap.to(favList, { duration: 0.1, opacity: 0 });

    setTimeout(() => {
      removeFromList();
    }, 1000);
  }

  function removeFromList() {
    //if artist.act matcher favlist så skal den fjernes
    let updatedFaves = fav.filter((a) => a.act !== artist.act);

    setFav(updatedFaves);
  }

  function getFavDay() {
    if (artist.day === "mon") {
      return "Monday";
    } else if (artist.day === "tue") {
      return "Tuesday";
    } else if (artist.day === "wed") {
      return "Wednesday";
    } else if (artist.day === "thu") {
      return "Thursday";
    } else if (artist.day === "fri") {
      return "Friday";
    } else if (artist.day === "sat") {
      return "Saturday";
    } else if (artist.day === "sun") {
      return "Sunday";
    }
  }

  return (
    <article ref={favListCard} className="fav-card">
      <h2>{artist.act}</h2>
      <hr></hr>
      <h3>{getFavDay()}</h3>
      <p>
        {artist.start} - {artist.end} | {artist.stage}
      </p>
      <img
        id="favlist-heart-icon"
        src={faved}
        onClick={removeFav}
        alt="faved-icon"
      ></img>
    </article>
  );
}
