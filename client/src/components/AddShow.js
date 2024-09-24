import React, { useState, useEffect } from "react";

function AddShow({ onAddShow, showToUpdate, onUpdateShow }) {
    const [newShow, setNewShow] = useState({
      id: null,
      name: "",
      network: "",
    });
  
    useEffect(() => {
      if (showToUpdate) {
        setNewShow(showToUpdate);
      }
    }, [showToUpdate]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (showToUpdate) {
        setNewShow({ ...newShow, name: e.target.name.value });
        fetch(`http://127.0.0.1:5000/shows/${showToUpdate.id}`, {
            method: "PUT", // Use PUT for updates
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: newShow.name }), // Only send updated name
          })
            .then((r) => r.json())
            .then((updatedShow) => {
              onUpdateShow(updatedShow);
              setNewShow({ id: null, name: "", network: "" });
            });
      } else {
        
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
            setNewShow({ id: null, name: "", network: "" });
          });
      }
    };
  
  
    return (
      <form className="new-show" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          autoComplete="off"
          placeholder="Enter name of new show"
          value={newShow.name}
          onChange={(e) => setNewShow({ ...newShow, name: e.target.value })}
        />
        <input
          type="text"
          name="network"
          autoComplete="off"
          placeholder="Enter network for new show"
          value={newShow.network}
          onChange={(e) => setNewShow({ ...newShow, network: e.target.value })}
        />
        <button type="submit">
          {showToUpdate ? "Update" : "Send"}
        </button>
      </form>
    );
  }
  
  export default AddShow;