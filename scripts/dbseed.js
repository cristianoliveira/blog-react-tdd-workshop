const seed = {
  "posts": [
    {
      "id": 1,
      "image": "image-post.png",
      "title": "json-server",
      "body": "Some awesome content",
      "author": "Some dude"
    },
    {
      "id": 2,
      "image": "image-post.png",
      "title": "Berlin",
      "body": "Its nice! #fun",
      "author": "Berlin dude"
    }
  ],
  "comments": [
    {
      "id": 1,
      "body": "some comment",
      "postId": 1
    }
  ],
  "profile": {
    "name": "typicode"
  }
};

console.log(JSON.stringify(seed));
