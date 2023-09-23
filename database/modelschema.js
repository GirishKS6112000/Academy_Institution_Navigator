import mongoose from "mongoose";

const schema = new mongoose.Schema({
    clgname:{type:String , trim: true},
    clgaddress :{type:String , trime: true},
    contact : {type :Number},
    course :{type: Array},

})

const m = new mongoose.model("myclg" , schema)

// const createdoc= async ()=>{
//     const result = await m({
//         clgname:"	Pondicherry University",
//         clgaddress: "Puducherry",
//         contact:7360713780,
//         course :["Bca" , "Btech CSE","Mtech CSE","Mca","ITI" ],
        

//     })

//     await result.save();
//     console.log("Document Added")
// }

export {m};