import React from "react";
import axios from "axios";
import updateSkillState from "./form";
import { Header, Table, Rating } from "semantic-ui-react";

const skillID = 1;
const skillname1 = "HTML/CSS";

const sd = [
  {
    id: 1,
    skillname: "HTML & CSS"
  },
  { id: 2, skillname: "JavaScript" },
  {
    id: 3,
    skillname: "React"
  },
  {
    id: 4,
    skillname: "Node/SQL"
  },
  { id: 5, skillname: "Agile Methodologies" }
];

class TableExamplePadded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill1: "",
      skill2: "",
      skill3: "",
      skill4: "",
      skill5: "",
      skillsDetails: [],
      skills: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:8000/skill").then(result => {
      this.setState({ skills: result.data.skills });
    });
  }

  handleSkillLevel = (keyName, e) => {
    this.setState({
      [keyName]: e.target.getAttribute("aria-posinset")
    });
  };

  handleSkill1 = event => {
    this.props.updateSkill1(event);
    this.setState({
      skill1: event.currentTarget.getAttribute("aria-posinset")
    });
  };
  handleSkill2 = event => {
    this.props.updateSkill2(event);
    this.setState({
      skill2: event.currentTarget.getAttribute("aria-posinset")
    });
  };

  handleSkill3 = event => {
    this.props.updateSkill3(event);
    this.setState({
      skill3: event.currentTarget.getAttribute("aria-posinset")
    });
  };
  handleSkill4 = event => {
    this.props.updateSkill4(event);
    this.setState({
      skill4: event.currentTarget.getAttribute("aria-posinset")
    });
  };
  handleSkill5 = event => {
    this.props.updateSkill5(event);
    this.setState({
      skill5: event.currentTarget.getAttribute("aria-posinset")
    });
  };

  render() {
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
            <Table.Row>
              <Table.Cell>
                <Header as="h4" textAlign="center">
                  {/* HTML/CSS */}
                  {skillname1}
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Rating
                  icon="star"
                  defaultRating={0}
                  maxRating={5}
                  onRate={e => this.handleSkill1(e)}
                />
                <p>State level: {this.state.skill1}</p>
                <span>
                  {this.state.skillsDetails.concat(skillID, this.state.skill1)}
                </span>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" textAlign="center">
                  JavaScript
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Rating
                  icon="star"
                  defaultRating={0}
                  maxRating={5}
                  onRate={e => this.handleSkill2(e)}
                />
                <p>State level: {this.state.skill2}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" textAlign="center">
                  React
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Rating
                  icon="star"
                  defaultRating={0}
                  maxRating={5}
                  onRate={e => this.handleSkill3(e)}
                />
                <p>State level: {this.state.skill3}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" textAlign="center">
                  Node/SQL
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Rating
                  icon="star"
                  defaultRating={0}
                  maxRating={5}
                  onRate={e => this.handleSkill4(e)}
                />
                <p>State level: {this.state.skill4}</p>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as="h4" textAlign="center">
                  Agile Methodologies
                </Header>
              </Table.Cell>
              <Table.Cell>
                <Rating
                  icon="star"
                  defaultRating={0}
                  maxRating={5}
                  onRate={e => this.handleSkill5(e)}
                />
                <p>State level: {this.state.skill5}</p>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}
export default TableExamplePadded;
