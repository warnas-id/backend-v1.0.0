import Express from "express";
import ExpressGraphQL from "express-graphql";
import mongoose from "mongoose";
import schema from "./graphQL/index";
import cors from "cors";
var app = Express();

mongoose.connect("mongodb://localhost/w6-dummy", {
  useFindAndModify: false,
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(cors());
app.use(
  "/graphql",
  ExpressGraphQL({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Listening at :4000...");
});
