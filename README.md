Format:

```json
//memory
{
  "_id": "60a4ba0af0c0f2a3a8c1d7e9",
  "user": "60a4b9c9f0c0f2a3a8c1d7e8", // reference to User
  "title": "My first trip to Paris",
  "description": "I visited Paris last year with my family and had a wonderful time. We saw the Eiffel Tower, the Louvre, and the Notre Dame. It was a memorable experience.",
  "image": "https://example.com/paris.jpg", // URL of the image
  "likes": ["60a4b9d9f0c0f2a3a8c1d7ea", "60a4b9e9f0c0f2a3a8c1d7eb"], // array of User references who liked the memory
  "createdAt": "2023-05-18T10:45:30.000Z",
  "updatedAt": "2023-05-18T10:45:30.000Z",
  "tags": [
    // added this field
    { "_id": 1, "label": "Beach" },
    { "_id": 2, "label": "Vacation" }
  ]
}

//user
{
  "_id": "60a4b9c9f0c0f2a3a8c1d7e8",
  "username": "alice",
  "email": "alice@example.com",
  "password": "a1b2c3d4", // hashed password
  // any other user information
}

//comment
{
  "_id": "60a4ba3af0c0f2a3a8c1d7ec",
  "user": "60a4b9d9f0c0f2a3a8c1d7ea", // reference to User
  "memory": "60a4ba0af0c0f2a3a8c1d7e9", // reference to Memory
  "text": "Wow, that sounds amazing! I've always wanted to go to Paris.",
  "createdAt": "2023-05-18T10:46:10.000Z",
  "updatedAt": "2023-05-18T10:46:10.000Z"
}


```
