import useFilter from "../hooks/useFilter";
const Filters = () => {
  const { grouping, ordering, updateGrouping, updateOrdering } = useFilter();

  return (
    <div className="headerFilter">
      <div>
        <label>Grouping</label>
        <select
          value={grouping}
          onChange={(e) => updateGrouping(e.target.value)}
        >
          <option value="Status">Status</option>
          <option value="User">User</option>
          <option value="Priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Ordering</label>
        <select
          value={ordering}
          onChange={(e) => updateOrdering(e.target.value)}
        >
          <option value="Priority">Priority</option>
          <option value="Title">Title</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
