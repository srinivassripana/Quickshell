import { ReactComponent as DisplayIcon } from "../assests/icons_FEtask/Display.svg";
import { ReactComponent as DownIcon } from "../assests/icons_FEtask/down.svg";
import { useState } from "react";
import Filters from "./Filters";
const Header = () => {
  const [open, setOpen] = useState(false);
  const toggleShow = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="header">
      <button id="headerButton" onClick={toggleShow}>
        <DisplayIcon />
        Display
        <DownIcon />
      </button>
      {open && <Filters />}
    </div>
  );
};

export default Header;
