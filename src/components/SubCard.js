import React from "react";
import { useFilterContext } from "../utils/filterContext";
import { useIcons } from "../hooks/useIcon";
import Logo from "./Logo";
import { ReactComponent as GreyIcon } from "../assests/icons_FEtask/Grey.svg";

const SubCard = React.memo(({ id, title, tag, priority, status, userId }) => {
  const { filterValues } = useFilterContext();
  const { grouping } = filterValues;

  const { Icon, renderPriorityIcon } = useIcons(status, priority);

  return (
    <div className="SubCard">
      <div className="SubcardHeader">
        <div>{id}</div>
        {(grouping === "Priority" || grouping === "Status") && (
          <Logo userId={userId} />
        )}
      </div>
      <div className="fontsizeinSubcard">
        <Icon className="IconBody1" />
        {title}
      </div>
      <div className="outerFeature">
        <div className="IconBody2">
          {grouping !== "Priority" &&
            (grouping === "Status" || grouping === "User") &&
            renderPriorityIcon}
        </div>
        <div className="Feature">
          <GreyIcon className="IconBody3" />
          {tag}
        </div>
      </div>
    </div>
  );
});

export default SubCard;
