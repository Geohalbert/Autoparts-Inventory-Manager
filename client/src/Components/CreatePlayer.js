import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      player: {
        name: "",
        item: "",
        price: "",
        seller: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Create User</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createPlayer) {
              this.props.createPlayer(this.state.player);
            }
          }}>
          <div>
            Name: <input onChange={(e) => {
              const post = {Name: e.target.name};
              this.setState({
                player: Object.assign(this.state.player,player)
              });
            }} />
          </div>
          <button>Create</button>
        </form>
        </div>
      </div>
    );
  }
}
export default CreateThings;
