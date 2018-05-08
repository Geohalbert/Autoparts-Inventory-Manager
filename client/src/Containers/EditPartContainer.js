import { connect } from "react-redux";
import {updatePart} from "../actions";
import EditPart from "../Components/EditPart";

function mapStateToProps(state) {
  return {
    part: state.part
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatePart: function (part) {
      dispatch(updatePart(part));
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditPart);
