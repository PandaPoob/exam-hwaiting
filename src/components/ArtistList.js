import Artist from "./Artist";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ArtistList({
  artists,
  genreFilter,
  searchInput,
  sort,
  sortDir,
  isLoggedIn,
}) {
  //genre filter
  let filteredArtists = [];
  filteredArtists =
    genreFilter === ""
      ? artists
      : artists.filter((artist) => artist.genre === genreFilter);

  //search filter
  let searchedFilter = [];
  filteredArtists.filter((val) => {
    if (searchInput === "") {
      searchedFilter.push(val);
    } else if (val.name.toLowerCase().includes(searchInput.toLowerCase())) {
      searchedFilter.push(val);
    }
    return searchedFilter;
  });

  //sorting
  //making copy since sort is destructive
  let copySortedArtists = JSON.parse(JSON.stringify(searchedFilter));
  //sort funktion
  function compare(a, b) {
    //lowercase to make sorting caseinsensitive
    let aName = a[sort].toLowerCase();
    let bName = b[sort].toLowerCase();

    if (aName > bName) {
      return 1;
    }
    if (aName < bName) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }
  //sort new array depending on direction
  if (sortDir === "asc") {
    copySortedArtists.sort(compare);
  } else {
    copySortedArtists.sort((a, b) => compare(b, a));
  }

  //making our artists for our artistlist
  let artistsList = copySortedArtists.map((a) => (
    <Artist key={a.name} artist={a} isLoggedIn={isLoggedIn} />
  ));

  const artistListRef = useRef();
  useEffect(() => {
    const artistList = artistListRef.current;

    gsap.fromTo(
      artistList,
      { duration: 0.4, autoAlpha: 0 },
      { duration: 0.4, autoAlpha: 1, delay: 0.2 }
    );
  });

  return (
    <>
      {artists.length === 0 ? (
        <div id="artists-loader">
          <div className="lds-heart">
            <div></div>
          </div>
        </div>
      ) : artistsList.length === 0 && artists.length > 0 ? (
        <div id="search-result-container">
          <h4>No Result Found</h4>
          <p>Sorry, that filter combination has no results</p>
          <p>Please try different criteria</p>
        </div>
      ) : (
        <section ref={artistListRef} id="Artistlist">
          {artistsList}
        </section>
      )}
    </>
  );
}
