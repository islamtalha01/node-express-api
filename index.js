import  express  from "express";
import bodyparser from "body-parser"
import userRoutes from "./routes/users.js";
const app= express();
const PORT= 5000;
app.use(bodyparser.json());
app.use('/users',userRoutes)
app.listen(PORT,()=>console.log(`Server is running on port : http://localhost:${PORT}`))
app.get('/',(req,res)=>{   
     res.send("Hello from homepage");
})