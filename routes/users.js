import  express  from "express";
import { Updateuser, deleteuserbyid,dispuser,getuserbyid,addnewuser } from "../controllers/users.js";

const router=express.Router();

router.get('/',dispuser)
router.post('/',addnewuser)
router.get('/:id',getuserbyid)
router.delete('/:id',deleteuserbyid)
router.patch('/:id',Updateuser)
export default router
