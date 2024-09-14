import React, { useState } from "react";

function AddShow({ onAddShow }) {
  const [newShow, setNewShow] = useState({
    name: "",
    network: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://127.0.0.1:5000/shows", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newShow),
    })
      .then((r) => r.json())
      .then((newShow) => {
        onAddShow(newShow);
        setNewShow({ name: "", network: "" });
      });
  };

  return (
    <form className="new-show" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        autoComplete="off"
        value={newShow.name}
        onChange={(e) => setNewShow({ ...newShow, name: e.target.value })}
      />
      <input
        type="text"
        name="network"
        autoComplete="off"
        value={newShow.network}
        onChange={(e) => setNewShow({ ...newShow, network: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default AddShow;