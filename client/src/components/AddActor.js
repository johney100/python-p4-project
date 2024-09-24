import React from "react";
import { Formik, Form, Field } from "formik";

function AddActor({ onAddActor, showId }) {
  const initialValues = {
    name: "",
    age: "",
    show_id: showId,
    role: "",
  };

  const handleSubmit = async (values) => {
    // Send a POST request to create a new actor
    const actorResponse = await fetch("http://127.0.0.1:5000/actors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!actorResponse.ok) {
      console.error("Error creating actor:", actorResponse.statusText);
      return;
    }

    const newActorData = await actorResponse.json();

    // Send a POST request to create a new show-actor association
    const associationResponse = await fetch("http://127.0.0.1:5000/shows_actors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        show_id: showId,
        actor_id: newActorData.id,
        role: newActorData.role,
      }),
    });

    if (!associationResponse.ok) {
      console.error(
        "Error creating show-actor association:",
        associationResponse.statusText
      );
      return;
    }

    onAddActor(newActorData);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, handleChange }) => ( // Destructure props from Formik
        <Form className="new-review">
          <h4>Add an actor to this show</h4>
          <Field
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter Actor's Name"
            value={values.name} // Access value from Formik state
            onChange={handleChange} // Use Formik's handleChange
          />
          <Field
            type="text"
            name="age"
            autoComplete="off"
            placeholder="Enter Actor's Age"
            value={values.age}
            onChange={handleChange}
          />
          <Field
            type="text"
            name="role"
            autoComplete="off"
            placeholder="Enter Actor's Role"
            value={values.role}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </Form>
      )}
    </Formik>
  );
}

export default AddActor;