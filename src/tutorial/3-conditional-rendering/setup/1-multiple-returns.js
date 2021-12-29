import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [users, setUsers] = useState("default user");

  const getUsers = async () => {
    const response = await fetch(url);

    if (response.status >= 200 && response.status < 299) {
      const users = await response.json();

      const { login } = users;
      setUsers(login);

      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsError(true);
      throw new Error(response.statusText);
    }
    // users here is an object, thats why we can do const {login} = users;
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>{users}</h1>
      </div>
    </>
  );
};

export default MultipleReturns;
