export default function SearchFilter({ setSearchInput }) {
  return (
    <input
      id="search-filter"
      type="text"
      placeholder="Search..."
      onChange={(event) => {
        setSearchInput(event.target.value);
      }}
    ></input>
  );
}
