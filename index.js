// const express = require('express');
// const cors = require('cors');
// const data = require('./scrapper');
// const axios=require('axios');
// const app = express();

// app.use(cors());
// app.use(express.json());

// const deleteCoin=()=>{

//     let id="btc";
//     axios.delete(`http://localhost:5000/delete/${id}`);
// }

// app.get('/coin',async(req,res) => {
//     try{
//         const price= await data.getData()
//         return res.status(200).json({
//             result:price,
//         })
    
//     }
//     catch(err){
//         return res.status(500).json({
//             err:err.toString(),
//         })
//     }
// });

// app.delete('/delete/:id',async(req,res)=>{
//     const coinId=req.params.id;
// //     const price= await data.getData();
// //     if(id.includes(coinId)){
// //         price.forEach((crypto)=>{
// //             if(crypto.coin===coinId){
// //                 delete crypto;
                
// //             }
// // })


// //     }
// console.log(coinId);

// })

// const PORT = 5000 || process.env;

// app.listen(PORT,() => {
//     console.log(`Backend running on ${PORT}!`);
    
// });