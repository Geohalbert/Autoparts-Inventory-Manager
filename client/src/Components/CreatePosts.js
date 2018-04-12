import React from "react";

class CreatePosts extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        _id: 1,
        location: "",
        item: "",
        condition: "",
        price: "",
        seller: ""
      }
    };
  }
  render() {
    return (
      <div>
        <div>
          <h1>Create a new post!</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (this.props.createPost) {
              this.props.createPost(this.state.post);
            }
          }}>
            <div>
              Location: <input onChange={(e) => {
                const post = {location: e.target.value};
                this.setState({
                  post: Object.assign(this.state.post,post)
                });
              }} />
            </div>
            <div>
              Item: <input onChange={(e) => {
                const post = {item: e.target.value};
                this.setState({
                  post: Object.assign(this.state.post,post)
                });
              }} />
            </div>
            <div>
              Condition: <input onChange={(e) => {
                const post = {condition: e.target.value};
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
export default CreatePosts;
