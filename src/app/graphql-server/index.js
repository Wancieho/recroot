const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const cors = require("cors");

const cars = [
  { id: "1", make: "Toyota", model: "Corolla", year: 2020 },
  { id: "2", make: "Honda", model: "Civic", year: 2019 },
  { id: "3", make: "Ford", model: "Mustang", year: 2021 },
];

const schema = buildSchema(`
  type Car {
    id: ID!
    make: String!
    model: String!
    year: Int!
  }

  type Query {
    cars: [Car]
  }
`);

const root = {
  cars: () => cars,
};

const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("GraphQL server running at http://localhost:4000/graphql");
});
