import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function newCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
      testimony={contact.testimony}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My References</h1>
      <Avatar image="http://tse3.mm.bing.net/th?id=OIP.gnGLXPYyU31ELk9gdJgkNQHaHa&pid=Api&P=0&w=300&h=300" />
      {contacts.map(newCard)}
    </div>
  );
}

export default App;
