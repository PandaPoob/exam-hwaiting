export default function DayFilter({ setDayFilter }) {
  function handleChange(event) {
    // console.log(event.target.value);
    setDayFilter(event.target.value);
  }

  return (
    <select id="day-filter" name="day_options" onChange={handleChange}>
      <option value={"All Days"}>All Days</option>
      <option value={"mon"}>Monday</option>
      <option value="tue">Tuesday</option>
      <option value="wed">Wednesday</option>
      <option value="thu">Thursday</option>
      <option value="fri">Friday</option>
      <option value="sat">Saturday</option>
      <option value="sun">Sunday</option>
    </select>
  );
}
