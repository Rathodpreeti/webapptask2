import React from 'react';

const Users = ({loading, users}) => {
    return loading ? (
        <div id="main">
            <img src="https://i.gifer.com/XZ5V.gif" alt="Loading..." className="loader"/>
        </div>
    ) :
    (
        <div id="user">
            {users.map(user =>
                <div className="people">
                {
                    console.log(user)
                }
                <div className="profile">
                <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                <h1 className="name">{user.first_name} {user.last_name}</h1>
                <p className="email">{user.email}</p>
                <p>User ID: {user.id}</p>
              </div>
            </div>               
            )
            }
        </div>
    )
}

export default Users;