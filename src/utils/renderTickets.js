import SubCard from "../components/SubCard";

export const renderTickets = (tickets) => {
  return tickets.map((ticket) => (
    <SubCard
      key={ticket?.id}
      id={ticket?.id}
      title={ticket?.title}
      tag={ticket?.tag?.join(", ")}
      priority={ticket?.priority}
      status={ticket?.status}
      userId={ticket?.userId}
    />
  ));
};
