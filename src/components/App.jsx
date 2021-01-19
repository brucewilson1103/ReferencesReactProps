import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My References</h1>
      <Avatar image="http://tse3.mm.bing.net/th?id=OIP.gnGLXPYyU31ELk9gdJgkNQHaHa&pid=Api&P=0&w=300&h=300" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
        testimony={contacts[0].testimony}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
        testimony={contacts[1].testimony}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
        testimony={contacts[2].testimony}
      />
    </div>
  );
}

export default App;
