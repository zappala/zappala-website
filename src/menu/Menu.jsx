import { useState } from "react";
import Dropdown from "./Dropdown";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";

const Menu = ({ prefix, items }) => {
  const [dropdown, setDropdown] = useState(false);
  let base = " ";
  return (
    // relative after:absolute after:top-[8px] after:right-4 after:text-[6px] after:content-['\25CF'] last:after:content-none
    <div className="py-1 pr-10 lg:pr-0 m-0">
      {items.submenu ? (
        <>
          <button
            className="text-white lg:text-default lg:px-5 text-xl"
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            <div className="flex">
              {items.title}

              {dropdown ? (
                <FaCaretDown className="mt-1" />
              ) : (
                <FaCaretRight className="mt-1" />
              )}
            </div>
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <a
          className="no-underline font-gothic text-white lg:hover:text-sky-500 lg:text-default mt-4 text-base lg:text-base lg:mt-0 hover:underline"
          href={prefix + items.url}
        >
          {items.title}
        </a>
      )}
    </div>
  );
};

export default Menu;
