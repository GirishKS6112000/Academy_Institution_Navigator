import { m } from "../database/modelschema.js"

class college{
    //home page , about page and contact page of AIN
    static home = async (req ,res)=>{
        try{
        const result = await m.find()
        
        res.render('index' , {result})
        }catch(err){
            console.log(err)
        }
    }
    static habout= async (req ,res)=>{
        try{
            res.render("about")
            }catch(err){
                console.log(err)
            }
    }
    static hcontact= async (req ,res)=>{
        try{
        res.render("contact")
        }catch(err){
            console.log(err)
        }
    }
    static clg =async (req,res)=>{
        try{
        const result= await m.findById(req.params.id)
        res.render("./college/clg.ejs" , {result})
        }catch(err){
            console.log(err)
        }
        
}
static bca= async (req,res)=>{
    try{
    res.render('./course/bca.ejs')
    }catch(err){
        console.log(err)
    }
}
static mca= async (req,res)=>{
    try{
    res.render('./course/mca.ejs')
    }catch(err){
        console.log(err)
    }
}
static bse= async (req,res)=>{
    try{
    res.render('./course/bse.ejs')
    }catch(err){
        console.log(err)
    }
}
static btech= async (req,res)=>{
    try{
    res.render('./course/btech.ejs')
    }catch(err){
        console.log(err)
    }
}
static iti= async (req,res)=>{
    try{
    res.send('No Page Found')
    }catch(err){
        console.log(err)
    }
}
static mtech= async (req,res)=>{
    try{
    res.render('./course/mtech.ejs')
    }catch(err){
        console.log(err)
    }
}
}

export default college