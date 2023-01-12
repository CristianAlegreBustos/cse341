require('dotenv').config();
const express=require('express');
const bodyParser = require('body-parser');

const app= express();
const port = 3000;
const mongoConnect = require('./db/index').mongoConnect;
app.use(bodyParser.json());
app.use('/',require('./routes/index'))

const contactsRoutes = require('./routes/contacts');
app.use('/contacts', contactsRoutes);

mongoConnect(() => {
  app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
  });
});
