import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: "Accounting", text: "Accounting / Bookkeeping", value: "Accounting" },
  { key: "Coaching", text: "Coaching", value: "Coaching" },
  {
    key: "Event, Management",
    text: "Event Management",
    value: "Event Management"
  },
  {
    key: "Recruitment",
    text: "Graduate Job Placement (Recruitment)",
    value: "Recruitment"
  },
  {
    key: "Marketing, Social",
    text: "Growth Marketing / Social Media Strategy",
    value: "Marketing"
  },
  {
    key: "writing",
    text: "Journalism / Writing",
    value: "writing"
  },
  {
    key: "Partnerships",
    text: "NGO and Corporate Outreach / Fundraising / Partnerships",
    value: "Partnerships"
  },
  {
    key: "Pedagogy",
    text: "Mechanical Pedagogy / Learning Environments",
    value: "Pedagogy"
  },
  {
    key: "Wellbeing",
    text: "Personal Support Work / Wellbeing",
    value: "Wellbeing"
  },
  {
    key: "photography",
    text: "Photography / Videography",
    value: "photography"
  },
  {
    key: "business",
    text: "Project Management / Business Analysis",
    value: "business"
  },
  {
    key: "community",
    text: "Volunteer Engagement / Community Management",
    value: "community"
  }
];

const DropdownExampleMultipleSelection = () => (
  <Dropdown placeholder="Skills" fluid multiple selection options={options} />
);

export default DropdownExampleMultipleSelection;
