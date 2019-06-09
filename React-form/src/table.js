import React from "react";
import { Header, Table, Rating } from "semantic-ui-react";

const TableExamplePadded = () => (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Programming Language</Table.HeaderCell>

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
          <Rating icon="star" defaultRating={0} maxRating={5} />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" textAlign="center">
            JavaScript
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Rating icon="star" defaultRating={0} maxRating={5} />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" textAlign="center">
            React
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Rating icon="star" defaultRating={0} maxRating={5} />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" textAlign="center">
            Node/SQL
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Rating icon="star" defaultRating={0} maxRating={5} />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" textAlign="center">
            Agile Methodologies{" "}
          </Header>
        </Table.Cell>

        <Table.Cell>
          <Rating icon="star" defaultRating={0} maxRating={5} />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableExamplePadded;
