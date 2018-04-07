import React from "react";

class CreateThings extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        location: "",
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
          <h1>Sell Something!</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createPost) {
              this.props.createPost(this.state.post);
            }
          }}>
          <div>
            Item: <input onChange={(e) => {
              const post = {item: e.target.value};
              this.setState({
                post: Object.assign(this.state.post,post)
              });
            }} />
          </div>
          <div>
            Price: <input onChange={(e) => {
              const post = {price: e.target.value};
              this.setState({
                post: Object.assign(this.state.post,post)
              });
            }} />
          </div>
          <div>
            Location: <input onChange={(e) => {
              const post = {location: e.target.value};
              this.setState({
                post: Object.assign(this.state.post,post)
              });
            }} />
          </div>
          <div>
            Seller: <input onChange={(e) => {
              const post = {seller: e.target.value};
              this.setState({
                post: Object.assign(this.state.post,post)
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
