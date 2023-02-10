const createUser = (name, email) => {
  const newUser = { name, email };

  fetch(`${process.env.REACT_APP_SERVER_URL}/create-user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((data) =>
      localStorage.setItem("user-token", JSON.stringify(data.token))
    );
};

export default createUser;
