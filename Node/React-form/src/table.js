import React from "react";
import axios from "axios";
import { Header, Table, Rating } from "semantic-ui-react";

class TableExamplePadded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSkillLevel = this.handleSkillLevel.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:8000/skill").then(result => {
      console.log(result.data.skills);
      this.setState({ skills: result.data.skills });
      console.log("state", this.state.skills);
    });
  }

  // handleChange(event) {
  //   //const currentTarget = event.currentTarget;
  //   // console.log(currentTarget);
  //   // [event.target.name]: event.target.value

  //   this.setState({
  //     skillLevel: event.target.getAttribute("aria-posinset")
  //     //[event.target.name]: event.target.getAttribute("aria-posinset")
  //   });

  //   console.log(event.currentTarget.getAttribute("aria-posinset"));
  //   //console.log(event.target.getAttribute("aria-posinset"));
  //   console.log("Skill level is: " + this.state.skillLevel);
  // }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSkillLevel(event) {
    this.setState({
      selectedSkillLevel: event.target.getAttribute("aria-posinset")
    });
    console.log(event.target.getAttribute("aria-posinset"));
    console.log("selected skill Level: " + this.state.selectedSkillLevel);
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
            //onChange={this.handleChange}
            name="skillLevel"
            icon="star"
            defaultRating={0}
            maxRating={5}
            onRate={this.handleSkillLevel}
            //value={this.state.selectedSkillLevel}
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
            {/* reset the skillIterator each time we call map */}
            {this.state.skills.map(s => (
              <Row value={s.id}>{s.skillname}</Row>
            ))}
          </Table.Body>
        </Table>
        <p>State level: {this.state.skillLevel}</p>
      </div>
    );
  }
}

export default TableExamplePadded;
