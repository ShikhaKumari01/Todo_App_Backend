const Todo=require("../models/Todo")
exports.deleteTodo=async (req,res)=>{
    try{
        const {id}=req.params;
        const todo=await Todo.findByIdAndDelete({_id:id});
        res.status(200).json({
            status:true,
            data:todo,
            message:"Delete successfully"
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                status:false,
                error:err.message,
                message:"Server error"
            }
        )
    }
}