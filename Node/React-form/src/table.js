import React from "react";
import { Header, Table, Rating } from "semantic-ui-react";

class TableExamplePadded extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill1: ""
    };
    this.handleSkillLevel = this.handleSkillLevel.bind(this);
  }

  handleSkillLevel = (keyName, e) => {
    this.setState({
      [keyName]: e.target.getAttribute("aria-posinset")
    });
  };

  handleSkill1(event) {
    this.setState({
      skill1: event.currentTarget.getAttribute("aria-posinset")
      //skill2: event.currentTarget.getAttribute("aria-posinset")
    });
  }
  handleSkill2(event) {
    this.setState({
      skill2: event.currentTarget.getAttribute("aria-posinset")
    });
  }

  handleSkill3(event) {
    this.setState({
      skill3: event.currentTarget.getAttribute("aria-posinset")
    });
  }
  handleSkill4(event) {
    this.setState({
      skill4: event.currentTarget.getAttribute("aria-posinset")
    });
  }
  handleSkill5(event) {
    this.setState({
      skill5: event.currentTarget.getAttribute("aria-posinset")
    });
  }

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
                  HTML/CSS
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
