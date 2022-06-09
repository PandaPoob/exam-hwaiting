export default function GenreFilter({ setGenreFilter, genreFilter }) {
  return (
    <div id="genre-filter">
      <button
        style={
          genreFilter === "" ? { boxShadow: "0px 0px 6px 2px #5affff" } : null
        }
        className="genre-filter-button"
        onClick={() => setGenreFilter("")}
      >
        All artists
      </button>
      <button
        id="button-girlgroup"
        style={
          genreFilter === "Girl group"
            ? { boxShadow: "0px 0px 6px 2px #ff6497" }
            : null
        }
        className="genre-filter-button"
        onClick={() => setGenreFilter("Girl group")}
      >
        Girl group
      </button>
      <button
        id="button-boygroup"
        style={
          genreFilter === "Boy group"
            ? { boxShadow: "0px 0px 6px 2px #aa53ff" }
            : null
        }
        className="genre-filter-button"
        onClick={() => setGenreFilter("Boy group")}
      >
        Boy group
      </button>
      <button
        id="button-soloist"
        style={
          genreFilter === "Soloist"
            ? { boxShadow: "0px 0px 6px 2px #fc61ff" }
            : null
        }
        className="genre-filter-button"
        onClick={() => setGenreFilter("Soloist")}
      >
        Soloist
      </button>
      <button
        id="button-coed"
        style={
          genreFilter === "Co-ed"
            ? { boxShadow: "0px 0px 6px 2px #88ff6b" }
            : null
        }
        className="genre-filter-button"
        onClick={() => setGenreFilter("Co-ed")}
      >
        Co-ed
      </button>
    </div>
  );
}
