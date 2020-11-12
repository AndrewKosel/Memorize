import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0
  };

  shuffle = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let friends = this.state.friends.sort(.5-Math.random);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: friends });



    //increment or decrement score depending on the click of the image 
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffle={this.shuffle()}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
