const routes=require("express").Router()

routes.get('/',(req,res)=>{
res.send('Cristian Nahuel Alegre Bustos!')
});

routes.get('/test',(req,res)=>{
  res.send('Testing Place')
  });


module.exports=routes