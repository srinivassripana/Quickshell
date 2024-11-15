const getInitials = (name) => {
  if (!name) return "";
  const nameParts = name.split(" ");
  const char1 = nameParts[0]?.charAt(0) || "";
  const char2 = nameParts[1]?.charAt(0) || "";
  return `${char1}${char2}`;
};
export default getInitials;
