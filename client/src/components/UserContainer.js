import React, {useEffect, useState } from "react";
import UserCard from "./UserCard"; 

function UserContainer({users}) {
  return (
    <div>
      <h2>Active User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserCard user={user} /> {/* Pass data to ActorCard */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserContainer;