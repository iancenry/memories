// utils/service.js
function getUser(id) {
  return fetch(`http://localhost:8000/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export { getUser };
