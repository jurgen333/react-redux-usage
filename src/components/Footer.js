import React from "react";
import FilterLink from "./FilterLink";
const Footer = () => {
  return (
    <div>
      <span>Show: </span>
      <FilterLink filter={"SHOW_ALL"}>All</FilterLink>
      <FilterLink filter={"ACTIVE"}>Active</FilterLink>
      <FilterLink filter={"COMPLETED"}>Completed</FilterLink>
    </div>
  );
};

export default Footer;
