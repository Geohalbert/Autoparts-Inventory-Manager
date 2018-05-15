import React, { Component } from "react";
import {Input, Button, Dropdown,Grid} from "semantic-ui-react";

class EditParts extends Component {
  constructor() {
    super();
    this.state = {
        fieldsVisible: false,
        partNumberFlagVisible: false,
        locationEditFlagVisible: false,
        onHandEditFlagVisible: false,
        errorEditFlagVisible: false,
        successEditFlagVisible: false,
      part: {
        _id: 0,
        partNumber: "",
        location: "",
        onHand: 0,
        status: ""
      },
    };
  }

  selectPartNumber = (e, { value }) => {
    let tempPart = this.props.parts.filter((p) => {
        return p.partNumber === value;
    });
    console.log(tempPart);
    console.log(value);
    const part = { _id: tempPart[0]._id,
                    partNumber: value,
                    location: tempPart[0].location,
                    onHand: tempPart[0].onHand,
                    status: tempPart[0].status,
                     };

    this.setState({
      fieldsVisible: true,
      part: Object.assign(this.state.part,part)
    })
    //console.log(this.state.part);
  }

  statusSelect = (e, { value }) => {
    let part = {status: value};
    this.setState({
      part: Object.assign(this.state.part,part)
    });

  }

  render() {
    let partNumbers = [];
        partNumbers = this.props.parts.map(function(p){
            return {
                text: p.partNumber + " - " + p.status,
                value: p.partNumber
            }
        });
    let locationEditFlag = "";
    if (this.state.locationEditFlagVisible === true ){
      locationEditFlag= "Please enter a valid location (letters only)";
    }
    else{
      locationEditFlag= "";
    }
    let onHandEditFlag = "";
    if (this.state.onHandEditFlagVisible === true ){
      onHandEditFlag= "Please enter a valid On Hand (numbers only)";
    }
    else{
      onHandEditFlag= "";
    }
    let errorEditFlag = "";
    if (this.state.errorEditFlagVisible === true ){
      errorEditFlag= "Cannot edit part. Please fix error first and make sure all fields are populated.";
    }
    else{
      errorEditFlag= "";
    }
    let successEditFlag = "";
    if (this.state.successEditFlagVisible === true ){
        successEditFlag= "Part Successfully Edited";
    }
    else{
        successEditFlag= "";
    }
    let changeFields = "";
    const statusFields = [
      {
          text: "Missing",
          value: "Missing"
      },
      {
          text: "Needs label",
          value: "Needs label"
      },
      {
          text: "Resolved",
          value: "Resolved"
      },
    ]
    if (this.state.fieldsVisible){
        changeFields = <div>
                            <div>
                                <center>Location:</center><Input placeholder="Letters Only" value={this.state.part.location} onChange={(e) => {
                                    const part = {location: e.target.value,};
                                    this.setState({
                                        part: Object.assign(this.state.part,part)
                                    });
                                  if ((/^[0-9]+$/.test(e.target.value) || /^[0-9]+[a-zA-Z\s]/.test(e.target.value))|| e.target.value === ""){
                                        this.setState({
                                        locationEditFlagVisible: false,
                                        });
                                    }
                                    else{
                                        this.setState({
                                        locationEditFlagVisible: true
                                        });
                                    }
                                }} />
                            </div>
                            {locationEditFlag}
                            <div>
                                <center>On Hand:</center><Input placeholder="Number" value={this.state.part.onHand} onChange={(e) => {
                                    const part = {onHand: e.target.value,};
                                        this.setState({
                                            part: Object.assign(this.state.part,part)
                                        });
                                    if ((/^[0-9]+$/.test(e.target.value) && e.target.value.length < 100) || e.target.value === ""){
                                        this.setState({
                                            onHandEditFlagVisible: false,
                                        });
                                        }
                                        else{
                                        this.setState({
                                            onHandEditFlagVisible: true
                                        });
                                    }
                                }} />
                            </div>
                            {onHandEditFlag}
                            <div>
                              <center>Status:</center><Dropdown placeholder="Select status" fluid selection onChange={this.statusSelect} options={statusFields} />
                              </div>
                    </div>
    }


    return (

      <div>
          <Grid centered>
            <Grid.Row>
            </Grid.Row>

                <Grid.Column computer={2} tablet={2} mobile={2}>
                    <div>
                    <h2>Edit Part</h2>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        if (this.props.updatePart && this.state.nameEditFlagVisible === false &&
                        this.state.onHandEditFlagVisible === false && this.state.locationEditFlagVisible === false  &&
                        this.state.part.onHand !== "" && this.state.part.location !== "") {

                            this.props.updatePart(this.state.part);
                            this.setState({
                                errorEditFlagVisible: false,
                                successEditFlagVisible: true
                            });
                        }
                        else{
                            this.setState({
                                errorEditFlagVisible: true,
                                successEditFlagVisible: false
                                });
                        }
                        }
                    }>
                        <div className="dropdown">
                        Select Part Number to Edit:
                        <Dropdown placeholder="Parts" fluid selection onChange={this.selectPartNumber} options={partNumbers} />
                        </div>
                        {changeFields}
                        <div><center><Button>Edit</Button></center></div>
                        {errorEditFlag}
                        {successEditFlag}
                    </form>
                </div>
            </Grid.Column>
        </Grid>
    </div>

    );
  }
}
export default EditParts;
