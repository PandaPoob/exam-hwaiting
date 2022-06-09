import GenreFilter from "../components/artistfilters/GenreFilter";
import DayFilter from "../components//artistfilters/DayFilter";
import Sorting from "../components/artistfilters/Sorting";
import SearchFilter from "../components/artistfilters/SearchFilter";

export default function FilterOptions({
  setDayFilter,
  setGenreFilter,
  genreFilter,
  setSearchInput,
  setSortDir,
  sortDir,
}) {
  return (
    <section id="filter-section">
      <GenreFilter
        setGenreFilter={setGenreFilter}
        genreFilter={genreFilter}
      ></GenreFilter>
      <div id="filter-day-search">
        <DayFilter setDayFilter={setDayFilter}></DayFilter>
        <SearchFilter setSearchInput={setSearchInput}></SearchFilter>{" "}
        <Sorting setSortDir={setSortDir} sortDir={sortDir}></Sorting>
      </div>
    </section>
  );
}
