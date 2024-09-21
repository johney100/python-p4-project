import React, { useState } from "react";

function AddActor({ onAddActor, showId }) {
  const [newActor, setNewActor] = useState({
    name: '',
    age: '',
    show_id: showId,
    role: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to create a new actor
    const actorResponse = await fetch('http://127.0.0.1:5000/actors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newActor),
    });

    if (!actorResponse.ok) {
      console.error('Error creating actor:', actorResponse.statusText);
      return;
    }

    const newActorData = await actorResponse.json();

    // Send a POST request to create a new show-actor association
    const associationResponse = await fetch('http://127.0.0.1:5000/shows_actors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        show_id: showId,
        actor_id: newActorData.id,
        role: newActorData.role,
      }),
    });

    if (!associationResponse.ok) {
      console.error('Error creating show-actor association:', associationResponse.statusText);
      return;
    }

    onAddActor(newActorData);
    setNewActor({ name: '', age: '', show_id: showId, role: '' });
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
      <input
        type="text"
        name="role"
        autoComplete="off"
        placeholder="Enter Actor's Role"
        value={newActor.role}
        onChange={(e) => setNewActor({ ...newActor, role: e.target.value })}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default AddActor;