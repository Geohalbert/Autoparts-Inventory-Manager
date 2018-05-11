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
