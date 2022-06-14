import GenreFilter from "../components/artistfilters/GenreFilter";

import SearchFilter from "../components/artistfilters/SearchFilter";

export default function FilterOptions({
  setGenreFilter,
  genreFilter,
  setSearchInput,
}) {
  return (
    <section id="filter-section">
      <div id="search-filter">
        <SearchFilter setSearchInput={setSearchInput}></SearchFilter>
      </div>
      <div id="genre-filter">
        <GenreFilter
          setGenreFilter={setGenreFilter}
          genreFilter={genreFilter}
        ></GenreFilter>
      </div>
    </section>
  );
}
