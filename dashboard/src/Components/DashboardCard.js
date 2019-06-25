import React from "react";
//import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";

export default class DashboardCard extends React.Component {
  constructor() {
    super();
  }
  render() {
    let status = [
      "Signed Up",
      "Contacted",
      "Replied Contact",
      "Intro Chat",
      "Attended a class",
      "Intro to Volunteering"
    ];
    return (
      //<CardDeck>
      <CardGroup>
        {/* <Card>
          {status.map(header => (
            <Card.Header>{header}</Card.Header>
          ))}
          <Card.Body />
        </Card> */}
        <Card>
          <Card.Header>Signed Up</Card.Header>
          <Card.Body />
        </Card>
        <Card>
          <Card.Header>Contacted</Card.Header>
          <Card.Body />
        </Card>
        <Card>
          <Card.Header>Replied Contact</Card.Header>
          <Card.Body />
        </Card>
        <Card>
          <Card.Header>Intro Chat</Card.Header>
          <Card.Body />
        </Card>
        <Card>
          <Card.Header>Attended a class</Card.Header>
          <Card.Body />
        </Card>
        <Card>
          <Card.Header>Intro to Volunteering</Card.Header>
          <Card.Body />
        </Card>
      </CardGroup>
    );
  }
}
