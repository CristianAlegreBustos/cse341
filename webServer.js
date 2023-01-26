require('dotenv').config();
const express=require('express');
const bodyParser = require('body-parser');


const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

const app= express();
const port = 3000;
const mongoConnect = require('./db/index').mongoConnect;
app.use(bodyParser.json());
app.use('/',require('./routes/index'))

app.use('/contacts', require('./routes/contacts'));

mongoConnect(() => {
  app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
  });
});
