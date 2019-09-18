const Express = require("express");
const ExpressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const schema = require('./graphQL/index')
var app = Express();

mongoose.connect("mongodb://localhost/warnas", {
  useFindAndModify: false,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use("/graphql", ExpressGraphQL({
  schema: schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("Listening at :4000...");
});