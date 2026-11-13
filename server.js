const express=require('express');
const cors=require('cors');
const path=require('path');
require('dotenv').config();
const app=express();
app.use(cors());
app.use(express.json({limit:'12mb'}));
app.use(express.static(path.join(__dirname,'www')));
app.get('/health',(req,res)=>res.json({ok:true,name:'miniAI'}));
app.post('/api/chat',async(req,res)=>{
 try{
  const key=process.env.AI_API_KEY;
  if(!key)return res.status(503).json({message:'Chưa cấu hình AI_API_KEY trên máy chủ.'});
  const base=(process.env.AI_BASE_URL||'https://api.openai.com/v1').replace(/\/$/,'');
  const response=await fetch(base+'/chat/completions',{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+key},body:JSON.stringify({...req.body,model:req.body.model||process.env.AI_MODEL||'gpt-4o-mini'})});
  const data=await response.json();
  res.status(response.status).json(data);
 }catch(e){res.status(500).json({message:e.message})}
});
const port=process.env.PORT||3000;
app.listen(port,'0.0.0.0',()=>console.log(`miniAI running at http://localhost:${port}`));