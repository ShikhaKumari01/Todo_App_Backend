const Todo=require("../models/Todo");
exports.getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.status(200).json(
            {
                status:true,
                data:todos,
                message:"All data fetched",
            }
        )
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                status:false,
                data:"Internal server error",
                message:err.message,
            }
        )

    }
}


exports.getTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
        const todo=await Todo.findById({_id:id});
        if(!todo){
            return res.status(404).json(
                {
                    status:false,
                    message:"Error 404 found"
                }
            )
        }
        else{
            return res.status(200).json(
                {
                    status:true,
                    data:todo,
                    message:`Todo ${id} successfully fetched`
                }
            )
        }
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json({
            status:false,
            message:err.message
        })
    }
}