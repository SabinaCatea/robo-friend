import React from "react";
import { useState, useEffect } from "react";
//import { Component } from "react";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import "./app.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [newFilteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);
  //console.log(monsters);
  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(filteredMonsters);
  }, [newFilteredMonsters, searchField]);

  //console.log(filteredMonsters);
  const onSearchChange = (event) => {
    const newSearchField = event.target.value.toLowerCase();
    setSearchField(newSearchField);
  };

  // console.log(newSearchField);

  return (
    <div>
      {/* <div>
          {filteredMonsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>;
          })}
        </div> */}
      <h1 className="title">Monsters Rolodex </h1>
      <SearchBox onSearchChange={onSearchChange} />
      <CardList monsters={newFilteredMonsters} />
    </div>
  );
};
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) =>
//         this.setState(() => {
//           return { monsters: data };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     //console.log(filteredMonsters);
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {
//         searchField,
//       };
//     });
//   };
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField);
//     });
//     return (
//       <div>
//         {/* <div>
//           {filteredMonsters.map((monster) => {
//             return <h1 key={monster.id}>{monster.name}</h1>;
//           })}
//         </div> */}
//         <h1 className="title">Monsters Rolodex </h1>
//         <SearchBox onSearchChange={this.onSearchChange} />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
