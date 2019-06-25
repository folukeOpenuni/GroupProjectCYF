import Modal from "react-bootstrap/Modal";
import React from "react";

export default class Modals extends React.Component {
  render() {
    return (
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      />
    );
  }
}
