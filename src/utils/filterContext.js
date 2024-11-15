import React, { createContext, useState, useContext } from "react";
const FilterContext = createContext();

export const useFilterContext = () => {
  return useContext(FilterContext);
};
export const FilterProvider = ({ children }) => {
  const [filterValues, setFilterValues] = useState({
    grouping: "Status",
    ordering: "Priority",
  });

  return (
    <FilterContext.Provider value={{ filterValues, setFilterValues }}>
      {children}
    </FilterContext.Provider>
  );
};
