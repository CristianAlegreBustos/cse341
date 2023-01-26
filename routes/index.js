const routes=require("express").Router()

routes.get('/',(req,res)=>{
res.send('Cristian Nahuel Alegre Bustos!')
});

routes.get('/test',(req,res)=>{
  res.send('Testing Place')
  });

routes.get('/api-docs', (req, res) => {
  res.redirect('https://app.swaggerhub.com/apis-docs/CRISTIANNAHUELALEGRE/ContactsAPI/1.0.0');
});


module.exports=routes