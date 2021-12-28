import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  // what this useState does is, set users and setUsers as an empty array
  const [users, setUsers] = useState([]);
  // console.log("users outside getUsers", users);
  const getUsers = async () => {
    // fetching the api url
    const response = await fetch(url);
    // change to json and put it in users variable
    const users = await response.json();

    // what is the useState doing? it preserves the value and triggers re-render
    setUsers(users);
    // console.log(users);
  };

  // this useEffect runs every render
  useEffect(() => {
    getUsers();

    // make sure that we add the dependency array [] so that we dont get an infinite loop, this dependency array means only run it once
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
