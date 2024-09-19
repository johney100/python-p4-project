import React, { useState } from "react";

function AddUser({ onAddUser }) {
  const [newUser, setNewUser] = useState({
    location: "",
    username: "",
   
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((r) => r.json())
      .then((newUser) => {
        onAddUser(newUser);
        setNewUser({ location: "", username: "" });
      });
  };



  return (
    <form className="new-review" onSubmit={handleSubmit}>
      <input
        type="text"
        name="location"
        autoComplete="off"
        value={newUser.location}
        onChange={(e) => setNewUser({ ...newUser, location: e.target.value })}
      />
      <input
        type="text"
        name="username"
        autoComplete="off"
        value={newUser.username}
        onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default AddUser;