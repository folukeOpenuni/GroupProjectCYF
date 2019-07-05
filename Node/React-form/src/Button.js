//import React from "react";

//const Button = props => {
// return <button className="btn btn-primary">{props.placeHolder}</button>;
//};

//export default Button;

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
