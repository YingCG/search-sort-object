import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Search(props) {
  const [toggle, setToggle] = useState(false);

  const [dropdownContent, setDropdownContent] = useState("");

  const toggleMenu = () => {
    setToggle(!toggle);
    setDropdownContent(
      <>
        {/* <div className="text-right">Project</div>
        <div className="text-right">Categories</div>
        <div className="text-right">Date</div> */}
        <div className="text-right" onClick={() => props.orderby(true)}>
          A-Z
        </div>
        <div className="text-right" onClick={() => props.orderby(false)}>
          Z-A
        </div>
      </>
    );
  };

  const handleSearch = (e) => {
    props.search(e.target.value);
  };

  return (
    <div>
      <input
        className="mt-1 bg-emerald-50 p-2 px-4"
        placeholder="search"
        onChange={handleSearch}
      />
      <button
        className="button bg-emerald-700 p-2 px-4 text-white text-base hover:bg-amber-600"
        onClick={toggleMenu}
      >
        SortBy <IoMdArrowDropdown className="inline text-xl text-white" />
      </button>
      {toggle && dropdownContent}
    </div>
  );
}
