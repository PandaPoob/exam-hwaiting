export default function Sorting(props) {
  function handleSort() {
    props.setSortDir((old) => (old === "asc" ? "desc" : "asc"));
  }

  return (
    <button id="sorting-button" onClick={handleSort}>
      {props.sortDir === "asc" ? "A-Z" : "Z-A"}
    </button>
  );
}
