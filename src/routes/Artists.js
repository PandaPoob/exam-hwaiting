import { useState } from "react";
import ArtistList from "../components/ArtistList";
import FilterOptions from "../components/FilterOptions";
import Footer from "../components/Footer";
import vinylImg from "../images/vinyl.svg";
import arrow from "../images/arrow_up.svg";
import splashImg from "../images/subsplash.svg";
import { Link } from "react-scroll";

function Artists(props) {
  const [genreFilter, setGenreFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [artistsLength, setArtistsLength] = useState(0);
  //const [fullArtistList, setFullArtistList] = useState(makeList(artists, schedule))
  //navn på array - det er det der er state, navn på funktion - det skal kalde state (rebuilde)
  console.log(artistsLength);
  return (
    <>
      <main id="artists-main">
        <header
          id="artists-header"
          style={{ backgroundImage: `url(${splashImg})` }}
        >
          <div id="artists-header-content">
            <h1>Artists</h1>
            <img id="artists-header-img" src={vinylImg} alt="Vinyl"></img>
          </div>
        </header>
        <FilterOptions
          setGenreFilter={setGenreFilter}
          genreFilter={genreFilter}
          setSearchInput={setSearchInput}
          setSortDir={setSortDir}
          sortDir={sortDir}
        ></FilterOptions>
        <ArtistList
          schedule={props.schedule}
          artists={props.artists}
          genreFilter={genreFilter}
          searchInput={searchInput}
          sort={sort}
          setSort={setSort}
          sortDir={sortDir}
          setArtistsLength={setArtistsLength}
        ></ArtistList>
        {artistsLength >= 9 ? (
          <div id="art-top-button-container">
            <Link
              to="artists-main"
              id="art-top-button"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <img id="arrow-up-img" src={arrow} alt="arrow up"></img>
            </Link>
          </div>
        ) : null}
      </main>
      <Footer></Footer>
    </>
  );
}

export default Artists;
