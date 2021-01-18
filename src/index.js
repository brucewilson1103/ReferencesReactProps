import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>Cell: {props.tel}</p>
      <p>Email: {props.email}</p>
      <p>Testimony: {props.testimony}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My References</h1>
    <Card
      name="The Rock"
      img="https://www.maxim.com/.image/c_limit%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_700/MTU3ODY0MzkxNDY1NzcyMzYx/dwayne-the-rock-johnson-promo.jpg"
      tel="(867)530-9000"
      email="whatsCookin@gmail.com"
      testimony='"Bruce is one guy that definietly knows his role of developer."'
    />
    <Card
      name="Jesus"
      img="https://starsunfolded.com/wp-content/uploads/2018/09/Jesus-Christ.jpg"
      tel="(777)711-7117"
      email="cloud9@alphaOmega.com"
      testimony='"Thou Bruce Almighty, one who is truly following his passion and talents."'
    />
  </div>,
  document.getElementById("root")
);
