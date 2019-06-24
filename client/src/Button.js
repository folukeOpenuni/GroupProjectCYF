import React from "react";
import { Button, Segment } from "semantic-ui-react";

const ButtonExampleInverted = props => (
  <div>
    <Segment inverted>
      <Button inverted color="red">
        {props.placeHolder}
      </Button>
    </Segment>
  </div>
);

export default ButtonExampleInverted;
