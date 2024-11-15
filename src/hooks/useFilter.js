import { useState } from "react";
import { useFilterContext } from "../utils/filterContext";
const useFilter = () => {
  const { setFilterValues } = useFilterContext();
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");

  const updateGrouping = (value) => {
    setGrouping(value);
    setFilterValues((prev) => ({
      ...prev,
      grouping: value,
    }));
  };

  const updateOrdering = (value) => {
    setOrdering(value);
    setFilterValues((prev) => ({
      ...prev,
      ordering: value,
    }));
  };

  return { grouping, ordering, updateGrouping, updateOrdering };
};
export default useFilter;
