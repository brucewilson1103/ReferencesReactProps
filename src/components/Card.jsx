import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar image={props.img} />
      </div>
      <div className="bottom">
        <Detail titleInfo="Cell #" detailInfo={props.tel} />
        <Detail titleInfo="Email" detailInfo={props.email} />
        <Detail titleInfo="Testimony" detailInfo={props.testimony} />
      </div>
    </div>
  );
}

export default Card;
