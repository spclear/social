import React from 'react';


const UserItem = (props) => {
  return (
    <div>
      <div>{props.fullName}</div>
      <div>{props.id}</div>
      <div>{props.city}</div>
      <div>{props.country}</div>
      <div>{props.followed}</div>
      <div>{props.status}</div>
    </div>
  )
}

const Users = (props) => {
  let users = props.users.map(item => {
    return (
      <UserItem
        fullName={props.getFullName(item.id)}
        id={item.id}
        city={item.location.city}
        country={item.location.country}
        followed={String(item.followed)}
        status={item.status}
      />
    )    
  })
  return (
    <div>Users:
     <div>{users}</div>
    </div>
  )
}

export default Users