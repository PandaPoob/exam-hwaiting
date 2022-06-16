import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-scroll";
import ArtistList from "../components/ArtistList";
import FilterOptions from "../components/FilterOptions";
import Footer from "../components/Footer";
import vinylImg from "../images/vinyl.svg";
import arrow from "../images/arrow_up.svg";
import splashImg from "../images/subsplash.svg";

function Artists(props) {
  const [genreFilter, setGenreFilter] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sort, setSort] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [artLength, setArtLength] = useState(0);

  //console.log(artLength);

  gsap.registerPlugin(ScrollTrigger);
  const buttonRef = useRef();
  const headerRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const btn = buttonRef.current;
    const header = headerRef.current;
    const img = imgRef.current;

    gsap.to(header, {
      duration: 1,
      opacity: 1,
      ease: "none",
    });

    gsap.to(img, {
      delay: 1,
      duration: 1,
      rotation: 360,
    });

    gsap.to(btn, {
      delay: 5,
      duration: 0.5,
      opacity: 1,
      ease: "none",
    });
  });

  return (
    <>
      <main id="artists-main">
        <header
          id="artists-header"
          style={{ backgroundImage: `url(${splashImg})` }}
        >
          <div ref={headerRef} id="artists-header-content">
            <h1>Artists</h1>
            <img
              ref={imgRef}
              id="artists-header-img"
              src={vinylImg}
              alt="Vinyl"
            ></img>
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
          setArtLength={setArtLength}
        ></ArtistList>
        {artLength >= 3 ? (
          <div id="art-top-button-container" ref={buttonRef}>
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
