const colors = require("colors");
const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql"); // or const graphqlHTTP = require("express-graphql").graphqlHTTP;
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

const app = express();

// Connect to database
connectDB();

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: process.env.NODE_ENV === "development",
	})
);

app.listen(port, console.log(`Server running on port ${port}`));
