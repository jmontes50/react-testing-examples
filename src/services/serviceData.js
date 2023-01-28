const getData = () => {
  return fetch("https://reqres.in/api/users?page=2")
    .then((response) => response.json())
    .then((rpta) => rpta.data)
    .catch((err) => err);
};

export { getData };
