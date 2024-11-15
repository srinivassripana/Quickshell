import React, { useMemo } from "react";
import { ReactComponent as Add } from "../assests/icons_FEtask/add.svg";
import { ReactComponent as Dot3 } from "../assests/icons_FEtask/3 dot menu.svg";
import useGrouping from "../hooks/useGrouping";
import { renderTickets } from "../utils/renderTickets";

const MainCard = ({ groupKey, tickets, grouping, users }) => {
  const { getGroupLabel, renderGroupingIcon } = useGrouping(
    groupKey,
    tickets,
    grouping,
    users
  );

  const ticketItems = useMemo(() => renderTickets(tickets), [tickets]);

  return (
    <div className="MainCard">
      <div className="MainCardHeader">
        <div className="header-left">
          {renderGroupingIcon}
          <p>
            {getGroupLabel} {tickets.length}
          </p>
        </div>
        <div className="header-right">
          <Add />
          <Dot3 />
        </div>
      </div>

      <div className="ticket-list">{ticketItems}</div>
    </div>
  );
};

export default MainCard;
