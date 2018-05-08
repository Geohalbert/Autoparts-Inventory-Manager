import React from "react";
import {Input, Button, Dropdown, Grid} from "semantic-ui-react";

class EditPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        fieldsVisible: false,
        locationEditFlagVisible: false,
        onHandEditFlagVisible: false,
        statusEditFlagVisible: false,
        errorEditFlagVisible: false,
        successEditFlagVisible: false,
      part: {
        _id: "",
        partNumber: "",
        location: "",
        onHand: "",
        status: ""
      },
    };
  }

  selectPart = (e, { value }) => {
    let tempPart = this.props.parts.filter((p) => {
        return p.partNumber === value;
    });
    //console.log(tempPart);
    //console.log(value);
    const part = {_id: tempPart[0]._id,
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
    // let PartNumbers = [];
    // const PartsLength = this.props.parts()
    // for() PartNumbers
    // PartNumbers = this.props.parts.map(function(p){
    //     return {
    //         text: p.partNumber,
    //         value: p.partNumber
    //     }
    // })

    const PartNumbers = [
      {
          text: "20810005",
          value: "20810005"
      },
      {
          text: "22936017",
          value: "22936017"
      },
      {
          text:  "23338340",
          value:  "23338340"
      },
    ]

    let locationEditFlag = "";
    if (this.state.locationEditFlagVisible === true ){
      locationEditFlag= "Please enter a valid location (letters and spaces only)";
    }
    else{
      locationEditFlag = "";
    }
    let onHandEditFlag = "";
    if (this.state.onHandEditFlagVisible === true ){
      onHandEditFlag= "Please enter a valid onHand (letters only)";
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
                        if (this.props.updatePart) {
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
                        Select Part to Edit:
                        <Dropdown placeholder="Parts" fluid selection onChange={this.selectPart} options={PartNumbers} />
                        </div>
                        <div className="dropdown">
                        <center>Status:</center><Dropdown placeholder="Select status" fluid selection onChange={this.statusSelect} options={statusFields} />
                        </div>
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
export default EditPart;
//   constructor(props) {
//     super(props);
//     this.state = {
//       part: {
//         partNumber: "",
//         location: "",
//         onHand: "",
//         status: ""
//       },
//       isUpdated: false
//     };
//   }
//   //
//   statusSelect = (e, { value }) => {
//     const editPart = {status: value};
//     this.setState({
//       part: Object.assign(this.state.part,editPart)
//     });
//
//   }
//     componentDidMount() {
//       let Id = this.props.match.params.id;
//       this.props.getPart(Id);
//     }
//
//     componentWillReceiveProps(nextprops) {
//     if (this.props.part !== nextprops.part) {
//         this.setState({
//             part: {
//                 location: nextprops.part.location,
//                 onHand: nextprops.part.onHand
//             }
//         });
//     }
// }
//
// handleUpdate() {
//   if(this.props.updatePart) {
//     this.props.updatePart(this.props.part.id, this.state.part);
//     this.setState({isUpdated: true});
//   }
// };
// render() {
//   const statusFields = [
//     {
//         text: "Missing",
//         value: "Missing"
//     },
//     {
//         text: "Needs label",
//         value: "Needs label"
//     },
//     {
//         text: "Resolved",
//         value: "Resolved"
//     },
//   ]
//   const updateContent =
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       this.handleUpdate();
//     }}>
//       <div>
//         <div className="row">
//           <center>Current part details</center>
//           <div><b>Part Number:</b> {this.props.part.partNumber}</div>
//           <div><b>Location: </b> {this.props.part.location}</div>
//           <div><b>On Hand: </b> {this.props.part.onHand}</div>
//           <div><b>Status: </b> {this.props.part.status}</div>
//         </div>
//         <div>
//             Location: <input onChange={(e) => {
//               const editPart = {location: e.target.value};
//               this.setState({
//                 part: Object.assign(this.state.part,editPart)
//               });
//             }} value={this.state.part.location} />
//           </div>
//           <div>
//             On Hand: <input onChange={(e) => {
//               const editPart = {onHand: e.target.value};
//               this.setState({
//                 part: Object.assign(this.state.part,editPart)
//               });
//             }} value={this.state.part.onHand} />
//           </div>
//           <div className="dropdown">
//           <center>Status:</center><Dropdown placeholder="Select status" fluid selection onChange={this.statusSelect} options={statusFields} />
//           </div>
//           <div><center><Button>Update</Button></center></div>
//         </div>
//       </form>
//
//       const updated = <Redirect to="/" />
//
//       return (
//         <div>{this.state.isUpdated ? updated : updateContent}</div>
//       )
//     }
// }
// constructor() {
//   super();
//   this.state = {
//     partNumberFlagVisible: false,
//     locationFlagVisible: false,
//     onHandFlagVisible: false,
//     errorFlagVisible: false,
//     successFlagVisible: false,
//     part: {
//       partNumber: "",
//       location: "",
//       onHand: "",
//       status: ""
//     }
//   };
// }
// componentDidMount() {
//   let id = this.props.match.params.id;
//   this.props.getPart(id);
// }
//
// statusSelect = (e, { value }) => {
//   let part = {status: value};
//   this.setState({
//     part: Object.assign(this.state.part,part)
//   });
//
// }
//
// render() {
//   let partNumberFlag = "";
//   if (this.state.partNumberFlagVisible === true ) {
//     partNumberFlag = "Please enter a part number";
//   }
//   else {
//     partNumberFlag = "";
//   }
//   let locationFlag = "";
//   if (this.state.locationFlagVisible === true ){
//     locationFlag = "Please enter a bin location";
//   }
//   else {
//     locationFlag = "";
//   }
//   let onHandFlag = "";
//   if (this.state.onHandFlagVisible === true ){
//     onHandFlag= "Please enter numbers only";
//   }
//   else {
//     onHandFlag = "";
//   }
//   let errorFlag = "";
//   if (this.state.errorFlagVisible === true ){
//     errorFlag = "Cannot update. Please fix errors first and make sure all fields are populated.";
//   }
//   else {
//     errorFlag = "";
//   }
//   let successFlag = "";
//   if (this.state.successFlagVisible === true ){
//     successFlag = "Part Updated Successfully!";
//   }
//   else {
//     successFlag = "";
//   }
//
//   const statusFields = [
//     {
//         text: "Missing",
//         value: "Missing"
//     },
//     {
//         text: "Needs label",
//         value: "Needs label"
//     },
//     {
//         text: "Resolved",
//         value: "Resolved"
//     },
//   ]
//
//   return (
//     <div>
//
//       <div>
//         <h2>Update Part</h2>
//         <form onSubmit={(e) => {
//           e.preventDefault();
//           if (this.state.partNumberFlagVisible === false && this.state.locationFlagVisible === false && this.state.onHandFlagVisible === false && this.state.part.partNumber !== "" && this.state.part.location !== "" && this.state.part.onHand !== "" &&
//             this.state.part.status !== "") {
//             this.props.updatePart(this.state.part);
//             this.setState({
//                     errorFlagVisible: false,
//                     successFlagVisible: true
//                   });
//           }
//           else{
//             console.log("this.props.updatePart: ",this.props.updatePart);
//             console.log("this.state.partNumberFlagVisible: ",this.state.partNumberFlagVisible);
//             console.log("this.state.locationFlagVisible: ",this.state.locationFlagVisible);
//             console.log("this.state.onHandFlagVisible: ", this.state.onHandFlagVisible);
//             console.log("this.state.part.partNumber: ", this.state.part.partNumber);
//             console.log("this.state.part.location: ",this.state.part.location);
//             console.log("this.state.part.onHand: ",this.state.part.onHand);
//             console.log("this.state.part.status: ",this.state.part.status);
//             console.log("",);
//             console.log("",);
//             console.log("",);
//             console.log("",);
//             this.setState({
//                     errorFlagVisible: true,
//                     successFlagVisible: false
//                   });
//           }
//         }}>
//           <div>
//           <center>Part Number:</center><Input placeholder={this.state.part.partNumber} onChange={(e) => {
//               if ((/^[0-9]+$/.test(e.target.value) && e.target.value.length === 8) || e.target.value === ""){
//                 console.log("part Number success");
//                 const part = {partNumber: e.target.value};
//                 this.setState({
//                   partNumberFlagVisible: false,
//                   part: Object.assign(this.state.part,part)
//                 });
//               }
//               else{
//                 console.log("part number error")
//                   this.setState({
//                     partNumberFlagVisible: true
//                   });
//                 }
//             }} />
//           </div>
//           {partNumberFlag}
//           <div>
//             <center>Bin location:</center><Input placeholder="Numbers and/or letters" onChange={(e) => {
//               if ((/^[0-9]+$/.test(e.target.value) || /^[0-9]+[a-zA-Z\s]/.test(e.target.value))|| e.target.value === ""){
//                 console.log("location success");
//                 const part = {location: e.target.value};
//                 this.setState({
//                   locationFlagVisible: false,
//                   part: Object.assign(this.state.part,part)
//                 });
//               }
//               else{
//                 console.log("location error");
//                 this.setState({
//                   locationFlagVisible: true
//                   });
//               }
//             }} />
//           </div>
//           {locationFlag}
//           <div>
//           <center>On Hand:</center><Input placeholder="Enter quantity" onChange={(e) => {
//               if ((/^[0-9]+$/.test(e.target.value) && e.target.value.length < 100) || e.target.value === ""){
//                 console.log("On Hand success");
//                 const part = {onHand: e.target.value};
//                 this.setState({
//                   onHandFlagVisible: false,
//                   part: Object.assign(this.state.part,part)
//                 });
//               }
//               else{
//                 console.log("on Hand error")
//                   this.setState({
//                     onHandFlagVisible: true
//                   });
//                 }
//             }} />
//           </div>
//           {onHandFlag}
//           <div className="dropdown">
//           <center>Status:</center><Dropdown placeholder="Select status" fluid selection onChange={this.statusSelect} options={statusFields} />
//           </div>
//           <div><center><Button>Update</Button></center></div>
//           {errorFlag}
//           {successFlag}
//         </form>
//       </div>
//     </div>
//
//   );
// }
// }
// export default EditPart;
