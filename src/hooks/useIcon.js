import { useMemo } from "react";
import { getStatusIcon, getPriorityIcon } from "../utils/iconUtils";

export const useIcons = (status, priority) => {
  const Icon = useMemo(() => getStatusIcon(status), [status]);
  const renderPriorityIcon = useMemo(
    () => getPriorityIcon(priority),
    [priority]
  );

  return { Icon, renderPriorityIcon };
};
