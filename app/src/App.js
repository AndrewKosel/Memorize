import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    message: "To test your memory don't click on the same image twice",
    clicked: new Set()
  };

  shuffle = (friends) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let friends = this.state.friends.sort(.5-Math.random);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: friends });

    //increment or decrement score depending on the click of the image 

  };
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // handleDecrement decreases this.state.count by 1
  handleDecrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score - 1 });
  };

  validateClick = id => {
    let selectFriend = this.state.friends.find(friend => friend.id === id);
    if (this.state.clicked.has(selectFriend)) {
        this.setState(state => ({
            ...state,
            clicked: new Set(),
            message: "Ooooooooh NO you guessed wrong"
        }))
    } else {
        this.setState(state => ({
            ...state,
            friends: this.shuffleFriends(state.friends),
            clicked: state.clicked.add(selectFriend),
            score: Math.max(state.clicked.size, state.score),
            message: "WOOOOOOOOOOOOO YOU guuessed right"
        }))
    }
};
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Sponge Bob Memory Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffle={this.shuffle()}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            onClick={() => this.validateClick(friend.id)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;