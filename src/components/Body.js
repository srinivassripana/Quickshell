import useFetch from "../hooks/useFetch";
import { URL } from "../utils/constant";
import { useFilterContext } from "../utils/filterContext";
import MainCard from "./MainCard";
import { groupTickets } from "../utils/groupTickets";
import { sortTickets } from "../utils/sortTickets";
import nameContext from "../utils/nameContext";
import { useMemo } from "react";

const Body = () => {
  const { data, loading, error } = useFetch(URL);
  const { filterValues } = useFilterContext();
  const { grouping, ordering } = filterValues;

  const groupedTickets = useMemo(() => {
    return data ? groupTickets(data.tickets, grouping) : {};
  }, [data, grouping]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <nameContext.Provider value={data?.users}>
      <div className="Body">
        {Object.keys(groupedTickets).map((groupKey) => (
          <MainCard
            key={groupKey}
            groupKey={groupKey}
            tickets={sortTickets(groupedTickets[groupKey], ordering)}
            grouping={grouping}
            users={data?.users}
          />
        ))}
      </div>
    </nameContext.Provider>
  );
};

export default Body;
