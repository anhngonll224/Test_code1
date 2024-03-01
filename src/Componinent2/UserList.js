import React from 'react';
import UserItem from './UserItem';

function UserList({ users, searchTerm }) {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-list">
      {filteredUsers.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;