import { connect } from 'react-redux';
import {setSearchText} from "../actions";
import SearchPlayers from "../components/SearchPlayers";

function mapDispatchToProps(dispatch){
  return{
    set:function(text){
      let action =  setSearchText(text);
      dispatch(action);
    }
  }
}

export default connect(null,mapDispatchToProps)(SearchPlayers);
