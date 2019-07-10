import React, { Component } from "react";
import axios from "axios";
import ButtonExampleInverted from "./Button";
import RadioExampleToggle from "./radio";
import CheckboxExampleShorthandElement from "./checkbox";
import DropdownExampleMultipleSelection from "./dropdown";
import DropdownExample2 from "./dropdown2";
import TableExamplePadded from "./table";

class NameForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      locations: "",
      email: "",
      phone: "",
      skillLevel: "",
      skillName: "",
      otherSkills: "",
      description: "",
      teachable: "", //not too sure --running or teaching
      weekendAvailability: "", //set to false by default.  yes/no q
      weekdayAvailability: "",
      otherAvailability: "",
      classAvailability: "",
      submissionDate: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    // axios.get("http://localhost:8000/locations").then(response => {
    //   console.log(response);
    //   const locations = response.data;
    //   this.setState({ locations });
    // });

    axios.get("http://localhost:8000/locations").then(result => {
      console.log(result.data.locations);
      this.setState({ locations: result.data.locations });
      console.log("state", this.state);
    });
  }

  changeCity(event) {
    this.setState({
      selectedCity: event.target.value
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let volunteer = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      locations: this.state.locations,
      email: this.state.email,
      phone: this.state.phone
      //otherSkills: this.state.otherSkills
    };

    axios
      .post("http://localhost:8000/volunteers2", { ...volunteer })
      .then(result => {
        console.log(result);
        //console.log(result.data);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="exampleInputFname">What's your first name? </label>
          <input
            type={Text}
            class="form-control"
            id="exampleInputName1"
            name="firstname"
            placeholder="Type your answer here .."
            value={this.state.firstname}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleInputLname">What's your last name? </label>
          <input
            type={Text}
            class="form-control"
            id="exampleInputLname1"
            name="lastname"
            placeholder="Type your answer here .."
            value={this.state.lastname}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <div>
            <label>
              <h4>Which CYF city would you like to volunteer for? </h4>
            </label>
          </div>
          <div>
            <small id="cityHelp" class="form-text text-muted">
              If you're interested in bringing CYF to your city email us at
              contact@codeyourfuture.io.
            </small>
          </div>
          <div>
            <select
              onChange={this.handleChange}
              name="locations"
              value={this.state.selectedCity}
              required
            >
              <option value="0">Select city</option>
              <option value="1">London</option>
              <option value="2">Manchester</option>
              <option value="3">Glasgow</option>
              <option value="4">Newcastle</option>
              {/* <option>{this.state.locations.city}</option> */}

              {/* {this.state.locations.map(loc => (
                <option value={loc.id}>
                  {loc.city} ( {loc.country})
                </option>
              ))} */}
            </select>
          </div>
          <div>
            <label for="exampleInputEmail">What's your email address? </label>
            <input
              type="email"
              class="form-control"
              name="email"
              id="exampleInputEmail1"
              placeholder="Type your email here .."
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <label for="exampleInputNumber">What's your phone number? </label>

            <input
              type={Number}
              class="form-control"
              id="exampleInputNumber1"
              name="phone"
              placeholder="Type your number here If you don't mind us contacting you this way.."
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="interest" required>
              <h4>Cool ! What are you interested in helping with ? </h4>
            </label>
          </div>
          {/* <label>
            Teaching code or agile methodologies:
            <input type="checkbox" name="" onChange={this.handleChange} />
          </label>
          <br /> <br /> */}
          <CheckboxExampleShorthandElement
            label="Teaching code or agile methodologies"
            name=""
          />
          <CheckboxExampleShorthandElement label="Running and growing the organisation" />
          <div>
            <label for="interest" required>
              <h3>What is your level of expertise in the following areas?</h3>
            </label>
          </div>
          <TableExamplePadded
          // name="skillLevel"
          // value={this.state.skillLevel}
          // onChange={this.handleChange}
          />
          <div>
            <label for="exampleInputSkill">
              What other web development related expertise could you bring to
              CYF?{" "}
            </label>

            <input
              type={Text}
              className="form-control"
              id="exampleInputSkill"
              name="otherSkills"
              placeholder=" Type your answer here .."
              value={this.state.otherSkills}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="exampleInputAvail" required>
              <h4>
                Awesome. Would you be available to help during our classes on
                Saturdays/Sundays?
              </h4>
            </label>
            <RadioExampleToggle name="weekendAvailability" />
            {console.log(this.state)}
          </div>
          <div>
            <label>
              <h4>In which of these areas could you see yourself helping?</h4>
            </label>
          </div>
          <DropdownExampleMultipleSelection name="" />
        </div>
        <div>
          <div>
            <label>
              <h4>Awesome. When would you be available to help?</h4>
            </label>
          </div>
          <DropdownExample2 />
          <br />
          <br />
          <br />
        </div>
        <div>
          <ButtonExampleInverted placeHolder="Submit" />
        </div>
      </form>
    );
  }
}
export default NameForm;
