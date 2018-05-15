import { connect } from "react-redux";
import Parts from "../Components/Parts";
import {removePart,setSearchText} from "../actions";


function mapStateToProps(state) {
  return {
    parts: state.parts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removePart: function (id) {
      dispatch(removePart(id));
    },
    setSearchText: function (txt) {
      dispatch(setSearchText(txt));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Parts);
