<h3 align="center">
  <img src="./assets/images/cyber-psilocybin-logo.png" width="400">
</h3>


# nodejs.serverless.rest.graphql.boilerplate
🧙‍♂️ boilerplate of a serverless application using nodejs, with REST and GraphQL protocols

## Query examples

Getting all users with GraphQL

```graphql
query {
  getAllUsers{
    _id
    name
  }
}
```

Getting all posts from a given user with GraphQL

```graphql
query {
  getPostByUser(userID: "62004d9623a9940b47e00e6c") {
    _id
    content
    createdAt
    author {
      name
      username
    }
  }
}
```
Or, via the HTTP protocol

```curl
curl --request GET \
  --url http://localhost:4003/posts/user/62004d9623a9940b47e00e6c
```

## Mutation examples

Creating a new user with GraphQL

```graphql
mutation {
  createUser(input: {
    name: "Diogo",
    username: "@diogo.dev"
  }) {
    _id
  }
}
```
Or, via the HTTP protocol
```curl
curl --request POST \
  --url http://localhost:4003/users \
  --header 'Content-Type: application/json' \
  --data '{
	"name": "diogo",
	"username": "@diogo.dev"
}'
```

Creating a new post

```graphql
mutation {
  createPost(input: {
    content: "first post with graphql"
    author: "62004d9623a9940b47e00e6c"
  }) {
    _id
  }
}
```
