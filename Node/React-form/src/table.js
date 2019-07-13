import React from "react";
import axios from "axios";
import { Header, Table, Rating } from "semantic-ui-react";

const skills = [
  { id: 1, skillname: "HTML & CSS" },
  { id: 2, skillname: "JavaScript" },
  { id: 3, skillname: "React" },
  { id: 4, skillname: "Node/SQL" },
  { id: 5, skillname: "Agile Methodologies" },
  { id: 6, skillname: "Graduate Job Placement (Recruitment)" },
  { id: 7, skillname: "Event Management" },
  { id: 8, skillname: "Coaching" },
  { id: 9, skillname: "Accounting / Bookkeeping" },
  { id: 10, skillname: "Project Management / Business Analysis" },
  { id: 11, skillname: "Personal Support Work / Wellbeing" },
  {
    id: 12,
    skillname: "NGO and Corporate Outreach / Fundraising / Partnerships"
  },
  { id: 13, skillname: "Photography / Videography" },
  { id: 14, skillname: "Volunteer Engagement / Community Management" },
  { id: 15, skillname: "Growth Marketing / Social Media Strategy" },
  { id: 16, skillname: "Journalism / Writing" },
  { id: 17, skillname: "Pedagogy / Learning Environments" }
];

const skillsRequired = skills.slice(0, 4);

class TableExamplePadded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skillLevel: ""
    };
  }
  onClick(event) {
    const currentTarget = event.currentTarget;
    console.log(currentTarget);
    this.setState({
      skillLevel: currentTarget.getAttribute("aria-posinset")
    });
  }
  componentDidMount() {
    axios.get("http://localhost:8000/skill").then(result => {
      console.log(result.data.skills);
      this.setState({ skill: result.data.skills });
      console.log("state", this.state.skills);
    });
  }

  render() {
    const Row = ({ children }) => (
      <Table.Row>
        <Table.Cell>
          <Header as="h4" textAlign="center">
            {children}
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Rating
            icon="star"
            defaultRating={0}
            maxRating={5}
            onRate={e => this.onClick(e)}
          />
        </Table.Cell>
      </Table.Row>
    );
    return (
      <div>
        <Table celled padded>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell singleLine>
                Programming Language
              </Table.HeaderCell>

              <Table.HeaderCell>Level</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {skillsRequired.map(skill => (
              <Row>
                {skill.skillname}
                <p>{this.state.skillLevel}</p>
              </Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

export default TableExamplePadded;
