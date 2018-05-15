import { connect } from "react-redux";
import EditPart from "../Components/EditPart";
import {getPart,updatePart} from "../actions";

function mapStateToProps(state) {
  return {
    part: state.part,
    parts: state.parts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPart: function (id) {
      dispatch(getPart(id));
    },
    updatePart: function (id, part) {
      dispatch(updatePart(id, part));
    }
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPart);

import { connect } from "react-redux";
import EditParts from "../Components/EditParts";
import {
  updatePart,
} from "../actions";

function mapStateToProps(state) {
  return {
    part: state.part,
    parts: state.parts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatePart: function (part) {
      dispatch(updatePart(part));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditParts);
