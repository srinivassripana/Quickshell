// iconUtils.js
import { ReactComponent as TodoIcon } from "../assests/icons_FEtask/To-do.svg";
import { ReactComponent as BacklogIcon } from "../assests/icons_FEtask/Backlog.svg";
import { ReactComponent as DoneIcon } from "../assests/icons_FEtask/Done.svg";
import { ReactComponent as InProgressIcon } from "../assests/icons_FEtask/in-progress.svg";
import { ReactComponent as NopriorityIcon } from "../assests/icons_FEtask/No-priority.svg";
import { ReactComponent as LowPriorityIcon } from "../assests/icons_FEtask/Img - Low Priority.svg";
import { ReactComponent as MediumPriorityIcon } from "../assests/icons_FEtask/Img - Medium Priority.svg";
import { ReactComponent as HighPriorityIcon } from "../assests/icons_FEtask/Img - High Priority.svg";
import { ReactComponent as UrgentPriorityIcon } from "../assests/icons_FEtask/SVG - Urgent Priority colour.svg";

export const getStatusIcon = (status) => {
  switch (status) {
    case "Todo":
      return TodoIcon;
    case "In progress":
      return InProgressIcon;
    case "Backlog":
      return BacklogIcon;
    default:
      return DoneIcon;
  }
};

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 0:
      return <NopriorityIcon />;
    case 1:
      return <UrgentPriorityIcon />;
    case 2:
      return <HighPriorityIcon />;
    case 3:
      return <MediumPriorityIcon />;
    case 4:
      return <LowPriorityIcon />;
    default:
      return null;
  }
};
