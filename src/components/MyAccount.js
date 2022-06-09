import { Link } from "react-router-dom";
import FavArtist from "./FavArtist.js";
import Footer from "../components/Footer";
import heartImg from "../images/heart.svg";
import sakuraImg from "../images/sakura.svg";

export default function MyAccount({ fav, setFav }) {
  let favList = fav.map((a) => (
    <FavArtist fav={fav} setFav={setFav} key={a.act} artist={a} />
  ));
  //make copy since sort is destructive
  let copyFavList = favList.map((a) => {
    return { ...a };
  });

  //give days a value/number to sort on
  const days = {
    mon: 1,
    tue: 2,
    wed: 3,
    thu: 4,
    fri: 5,
    sat: 6,
    sun: 7,
  };
  //sort by passing custom callback that ranks object according to index in ur days object
  copyFavList.sort((a, b) => {
    return days[a.props.artist.day] - days[b.props.artist.day];
  });

  return (
    <>
      {" "}
      <header id="account-header">
        <h1>Profile</h1>
        <img id="account-header-img" src={sakuraImg} alt="Sakura"></img>
      </header>
      <main>
        <section id="account-info">
          <div id="account-info-left">
            <h2>Favourites</h2>
            <p>
              Here you can see your list of favourited artists to keep an eye on
              the artists you definietly don't want to miss!
            </p>
            <div id="account-fav-links">
              <Link id="fav-artist-link" to="/artists">
                Go to artists 🠮
              </Link>
              <Link to="/program">Go to program 🠮</Link>
            </div>
          </div>
          <div>
            <img id="account-img" src={heartImg} alt="heart" />
          </div>
        </section>
        {fav.length === 0 ? (
          <section id="fav-list-notif">
            <p>
              Oops! Your list of favourites are currently empty! Go to{" "}
              <Link className="favlist-notif-link" to="/artists">
                artists
              </Link>{" "}
              or{" "}
              <Link className="favlist-notif-link" to="/program">
                program
              </Link>{" "}
              to browse bands.
            </p>
          </section>
        ) : (
          <section id="fav-list">{copyFavList}</section>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}
