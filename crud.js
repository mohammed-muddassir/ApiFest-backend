const fastify=require("fastify")({logger:true});
const express = require('express');
const cors = require('cors');
const data = require('./scrapper');
const {nanoid}=require('nanoid');

let user=[];

// let temp={
//     "btc":[],
//     "etc":{},
//     'usdt':{},'bnb':{},'usdc':{},'ada':{},'xrp':{},'sol':{},'luna':{},'doge':{}
// }
// let coins=["btc",'eth','usdt','bnb','usdc','ada','xrp','sol','luna','doge'];
let price={
    "Crypto":[],
    "User":[]
};

fastify.get("/coin",async(req,res)=>{
     const d=await data.getData();
     price["Crypto"]=[];
     price["Crypto"].push(d);
    res.send(price)
})

fastify.get('/coin/:id',async(req,res)=>{
    const id=req.params.id;
    if(coins.includes(id)){
        user=await data.getData();
        user.forEach((crypto)=>{
            if(crypto.coin===id){
                return res.send(crypto);
                
                
            }
        })
    }
    else{
        res.send("enter correct coin");
    }
    

})
fastify.post('/coin',async(req,res)=>{
    console.log(req.body);
    
})


fastify.post('/save/:coin',async(req,res)=>{
    const data=req.body;
    price["User"].push(data);
   

    console.log(data);
    res.code(201).send(price);
   
})

// fastify.delete('/delete/:id',async(req,res)=>{
//    const coin=req.params.id;

//     if(index>-1){
//         price["User"].splice(index,1);
//         res.send(price);
//     }
//     else{
//         res.code(404).send('no rest');
//     }

// })


const start=async()=>{
    try{
        await fastify.listen(3000);
        console.log("workin...")

    }
    catch(err){
        fastify.log.error(err);
        process.exit(1);
    }
}
start();