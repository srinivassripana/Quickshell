import { useMemo } from "react";
import Logo from "../components/Logo";
import { ReactComponent as NopriorityIcon } from "../assests/icons_FEtask/No-priority.svg";
import { ReactComponent as LowPriorityIcon } from "../assests/icons_FEtask/Img - Low Priority.svg";
import { ReactComponent as MediumPriorityIcon } from "../assests/icons_FEtask/Img - Medium Priority.svg";
import { ReactComponent as HighPriorityIcon } from "../assests/icons_FEtask/Img - High Priority.svg";
import { ReactComponent as UrgentPriorityIcon } from "../assests/icons_FEtask/SVG - Urgent Priority colour.svg";
import { ReactComponent as TodoIcon } from "../assests/icons_FEtask/To-do.svg";
import { ReactComponent as DoneIcon } from "../assests/icons_FEtask/Done.svg";
import { ReactComponent as InProgressIcon } from "../assests/icons_FEtask/in-progress.svg";
import { ReactComponent as CancelIcon } from "../assests/icons_FEtask/Cancelled.svg";

const useGrouping = (groupKey, tickets, grouping, users) => {
  const getGroupLabel = useMemo(() => {
    if (grouping === "User") {
      const user = users.find((user) => user.id === groupKey);
      return user ? user.name : "Unknown User";
    }
    return groupKey;
  }, [grouping, groupKey, users]);

  const renderGroupingIcon = useMemo(() => {
    if (grouping === "Priority") {
      const priorityIcons = {
        0: <NopriorityIcon />,
        1: <UrgentPriorityIcon />,
        2: <HighPriorityIcon />,
        3: <MediumPriorityIcon />,
        4: <LowPriorityIcon />,
      };
      const highestPriority = Math.max(
        ...tickets.map((ticket) => ticket.priority)
      );
      return priorityIcons[highestPriority];
    } else if (grouping === "User") {
      return <Logo userId={groupKey} />;
    } else if (grouping === "Status") {
      const statusIcons = {
        Todo: <TodoIcon />,
        Done: <DoneIcon />,
        "In progress": <InProgressIcon />,
        Cancelled: <CancelIcon />,
      };
      const firstStatus = tickets[0]?.status;
      return statusIcons[firstStatus];
    }
    return null;
  }, [grouping, groupKey, tickets]);

  return { getGroupLabel, renderGroupingIcon };
};

export default useGrouping;
