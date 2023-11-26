function getUser(id) {
  fetch(`http://localhost:8000/users/${id}`)
    .then((res) => res.json)
    .then((data) => data);
}

export { getUser };
