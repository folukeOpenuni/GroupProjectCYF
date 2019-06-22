import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  {
    key: "classes",
    text: "During our classes on Saturdays/Sundays",
    value: "classes"
  },
  { key: "week", text: "During the week", value: "week" },
  {
    key: "other",
    text: "Other",
    value: "other"
  }
];

const DropdownExample2 = () => (
  <Dropdown
    placeholder="Choose as many as you like"
    fluid
    multiple
    selection
    options={options}
  />
);

export default DropdownExample2;
