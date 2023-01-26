const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "This is an API to execute CRUD requests",
  },
  host: "localhost:3000",
  schemes: ["http"],
};

const outputFile = "swagger.json";
const endpointsFiles = ["./routes/contacts.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
