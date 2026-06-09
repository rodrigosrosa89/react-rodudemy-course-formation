import React from "react";

class Feed extends React.Component {
  render() {
    return (
      <div key={this.props.id}>
        <h3>{this.props.username}</h3>
        <p> Curtidas: {this.props.curtidas}</p>
        <p> Comentários: {this.props.comentarios}</p>
      </div>
    );
  }
}

export default Feed;
