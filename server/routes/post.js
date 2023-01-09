const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const requireLogin =require('../middleware/requireLogin')
const Post=mongoose.model("Post")
router.get('/allpost',requireLogin,(req,res)=>{
    Post.find()
    .populate("postedby","__id name")
    .then(posts=>
    {
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })
})
router.get('/mypost',requireLogin,(req,res)=>{
    Post.find({postedby:req.user._id})
    .populate("postedby","_id name")
    .then(mypost=>{
res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })

})
router.post('/createpost',requireLogin,(req,res)=>{
    const {title,body,photo}=req.body
    console.log(title)
    console.log(body)
    console.log(photo)

    if(!title||!body||!photo)
    {
        return res.status(422).json({error:"please add all the fields"});
    }
   const post=new Post({
    title,
    body,
    photo,
    postedby:req.user
   })
   
   post.save().then(result=>{
    res.json({message:"Successfully Saved"})
   })
   .catch(err=>{
    res.json({error:err})
    console.log(err);
   })
})
module.exports=router