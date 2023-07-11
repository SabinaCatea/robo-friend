import { Component } from "react";

class Card extends Component {
  render() {
    //console.log(this.props);
    const { name, id, email } = this.props.monster;
    return (
      <div className="card">
        <img
          alt={name}
          src={`https://robohash.org/test${id}.png?size=200x200`}
        ></img>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
