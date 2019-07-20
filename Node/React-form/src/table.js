import React from "react";
import axios from "axios";
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
  };

  handleSkill3 = event => {
    this.props.updateSkill3(event);
  };
  handleSkill4 = event => {
    this.props.updateSkill4(event);
  };
  handleSkill5 = event => {
    this.props.updateSkill5(event);
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
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const result = {
  skillID: 1,
  skillLevel: 3
};

const skills = {
  result1: {
    skillID: 1,
    skillLevel: 3
  },
  result2: {
    skillID: 2,
    skillLevel: 3
  },
  result3: {
    skillID: 3,
    skillLevel: 3
  }
};

export default TableExamplePadded;
