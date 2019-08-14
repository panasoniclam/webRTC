const Test = require('./../moldel/model.test')
module.exports = {
    create: async (req,res,next)=>{
        if(!req.body.title){
            res.status(200).json({
                success:false
            })
        }
        else{
            try{
                const test = new Test({
                    title:req.body.title,
                    contend:req.body.contend
                })
                await test.save()
                res.status(200).json({
                    success:true,
                    
                })
            }catch(err){
                res.status(500).json({
                    success:false,
                    err
                })
            }
        }

    },
    findAll:  (req,res,next)=>{
        Test.find()
        .then(result=>{
            res.status(200).json({
                success:true,
                result
            })
        })
        .catch(err=>{
            res.status(200).json({
                success:true,
                err
            })
        })
        
    }
}