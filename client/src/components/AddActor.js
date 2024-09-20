import React, { useState } from "react";

function AddActor({ onAddActor, showId }) {
  const [newActor, setNewActor] = useState({
    name: "",
    age: "",
    show_id: showId,
   
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/actors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActor),
    })
      .then((r) => r.json())
      .then((newActor) => {
        onAddActor(newActor);
        setNewActor({ name: "", age: "" });
      });
  };


  return (
    <form className="new-review" onSubmit={handleSubmit}>
      <h4>Add an actor to this show</h4>
      <input
        type="text"
        name="name"
        autoComplete="off"
        value={newActor.name}
        onChange={(e) => setNewActor({ ...newActor, name: e.target.value })}
      />
      <input
        type="text"
        name="age"
        autoComplete="off"
        value={newActor.age}
        onChange={(e) => setNewActor({ ...newActor, age: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default AddActor;