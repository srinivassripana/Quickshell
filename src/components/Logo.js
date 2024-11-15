import React, { useContext } from "react";
import nameContext from "../utils/nameContext";
import getInitials from "../utils/getInitials";

const Logo = ({ userId }) => {
  const usersInfo = useContext(nameContext);
  const user = usersInfo.find((user) => user.id === userId);

  const initials = getInitials(user?.name);

  return (
    <div className="logo">
      <span>{initials}</span>
    </div>
  );
};

export default Logo;
