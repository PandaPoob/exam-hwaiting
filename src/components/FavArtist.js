import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import faved from "../images/faved.svg";
import favHover from "../images/active-fav.svg";

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

  function getFavBorder() {
    if (artist.day === "mon") {
      return "#FA00FF";
    } else if (artist.day === "tue") {
      return "#FF0057";
    } else if (artist.day === "wed") {
      return "#FF5B1D";
    } else if (artist.day === "thu") {
      return "#FFDD00";
    } else if (artist.day === "fri") {
      return "#32FF00";
    } else if (artist.day === "sat") {
      return "#5AFFFF";
    } else if (artist.day === "sun") {
      return "#8200FF";
    }
  }

  function getFavBoxShadow() {
    if (artist.day === "mon") {
      return "0px 0px 4px 1px #FA00FF";
    } else if (artist.day === "tue") {
      return "0px 0px 4px 1px #FF0057";
    } else if (artist.day === "wed") {
      return "0px 0px 4px 1px #FF5B1D";
    } else if (artist.day === "thu") {
      return "0px 0px 4px 1px #FFDD00";
    } else if (artist.day === "fri") {
      return "0px 0px 4px 1px #32FF00";
    } else if (artist.day === "sat") {
      return "0px 0px 4px 1px #5AFFFF";
    } else if (artist.day === "sun") {
      return "0px 0px 4px 1px #8200FF";
    }
  }

  return (
    <article
      ref={favListCard}
      className="fav-card"
      style={
        {
          borderColor: getFavBorder(),
          boxShadow: getFavBoxShadow(),
        }

        /*  props.artist.genre === "Boy group"
              ? { color: "red" }
              : { color: "blue" } */
      }
    >
      <Link
        key={artist.act}
        /* regex s is spaces, flag: g global and looks through whole string, "" is what we want to replace it with >nothing<  */
        to={`/artists/${artist.act.replace(/\s+|[/]/g, "+")}`}
      >
        <h2>{artist.act}</h2>
      </Link>

      <hr></hr>
      <h3>{getFavDay()}</h3>
      <p>
        {artist.start} - {artist.end} | {artist.stage}
      </p>
      <img
        id="favlist-heart-icon"
        src={faved}
        onMouseOver={(e) => (e.currentTarget.src = favHover)}
        onMouseLeave={(e) => (e.currentTarget.src = faved)}
        onClick={removeFav}
        alt="faved-icon"
      ></img>
    </article>
  );
}
