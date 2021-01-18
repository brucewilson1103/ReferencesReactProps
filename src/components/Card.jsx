import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">Cell # : {props.tel}</p>
        <p className="info">Email : {props.email}</p>
        <p className="info">Testimony : {props.testimony}</p>
      </div>
    </div>
  );
}

export default Card;
