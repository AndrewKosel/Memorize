import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let x = Math.floor(Math.random() * (i+1));
    let hold = array[i];
    array[i] = array[x];
    array[x] = hold
  }
  return array
};

function Popup(props){
  return(
        <div style={{backgroundColor: "#f0f8ffcc", display: "flex", boxShadow: "red -3px 2px 20px 7px", position: "absolute", width: "100%", height:"50vh",
        flexDirection:"column",
        justifyContent:"center",
        alignItems: "center"}}>
              <h1> {props.message}</h1>
        </div>
  )
}

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    message: "",
    highscore: 0,
    chooseCard: []
  };

  selectedFriend = id => {
    // Scores based on avenger selected and randomizes the deck.
    this.setState({message:""})
      let chooseCard = this.state.chooseCard;
      let score = this.state.score;
      let highScore = this.state.highscore;
  
      if (chooseCard.indexOf(id) === -1) {
        chooseCard.push(id);
        this.scoreIncrement();
        this.randomFriend();
      } 
      
      else if (this.state.score === 12) {
        this.setState({message:"Winner Winner Chicken Dinnner!!!"})
        this.setState({
          score: 0,
          chooseCard: []
        });
      } 
      
      else {
        this.setState({
          score: 0,
          chooseCard: []
        });
        this.setState({message:"Loser!"})
      }
  
      if (score > highScore) {
        this.setState({ highscore: score })
      }
    };


  randomFriend = () => {
    this.setState({ friends: shuffle(friends) })
  };

  scoreIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
       
        <Title
          score={this.state.score}
          highscore={this.state.highscore} />
          { this.state.message ?
          <Popup
            message={this.state.message}
          />: 
          <></>
          }
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            image={friend.image}
            selectedFriend={this.selectedFriend}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;