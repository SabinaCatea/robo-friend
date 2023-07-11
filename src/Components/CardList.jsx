import { Component } from "react";
import Card from "./Card";
import "./card.css";
class CardList extends Component {
  render() {
    const { monsters } = this.props;
    // console.log(monsters);
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          // const { name, email, id } = monster;
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
