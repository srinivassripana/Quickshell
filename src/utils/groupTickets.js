const priorityLevels = {
  0: "No Priority",
  1: "Urgent",
  2: "High",
  3: "Medium",
  4: "Low",
};

export const groupTickets = (tickets, grouping) => {
  const groups = {};

  tickets.forEach((ticket) => {
    let groupKey;

    if (grouping === "User") {
      groupKey = ticket.userId;
    } else if (grouping === "Status") {
      groupKey = ticket.status;
    } else if (grouping === "Priority") {
      groupKey = priorityLevels[ticket.priority];
    }

    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }

    groups[groupKey].push(ticket);
  });

  return groups;
};
