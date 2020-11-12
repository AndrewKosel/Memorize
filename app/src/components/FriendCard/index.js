import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card" onClick={() => props.selectedFriend(props.id)} className="choose">
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>

    </div>
  );
}

export default FriendCard;