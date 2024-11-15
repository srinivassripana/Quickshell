export const sortTickets = (tickets, ordering) => {
  return [...tickets].sort((a, b) => {
    if (ordering === "Priority") {
      return a.priority - b.priority;
    } else if (ordering === "Title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });
};
