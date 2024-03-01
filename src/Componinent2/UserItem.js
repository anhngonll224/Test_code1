import React from 'react';

function UserItem({ user }) {
  return (
    <div className="user-item">
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}

export default UserItem;