// const mongoose=require('mongoose');
// require("dotenv").config();
// const dbConnect=()=>{
//     mongoose.connect(process.env.DATABASE_URL,
//         {
//             useNewUrlParser:true,
//             useUnifiedTopology:true
//         }
// )
// .then(()=>console.log("Database connected successfully :)"))
// .catch((error)=>{
//     console.log(error.message);
//     process.exit(1);
// });
// }

// module.exports=dbConnect;



const mongoose=require('mongoose');
require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL)
.then(()=>console.log("Database connected successfully :)"))
.catch((error)=>{
    console.log(error.message);
    process.exit(1);
});
}

module.exports=dbConnect;
