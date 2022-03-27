import { v4 as uuidv4 } from 'uuid';
let users=[
    
    
];
export const addnewuser=(req,res)=>
{
    
    const user=req.body;
    users.push({...user,"id":uuidv4()})
    res.send(`User with name ${user.Firstname} is added to database`)
    
}
export const getuserbyid=(req,res)=>
{
     const {id}= req.params;  
     const finded_user=users.find((user)=> user.id===id)
     res.send(finded_user)
   
}
export const deleteuserbyid=(req,res)=>
{
    const {id}= req.params;
      users=users.filter(user=>user.id!=id)
      res.send(`User with id ${id} is deleted Successfully`)

}
export const Updateuser=(req,res)=>
{
    const {id}=req.params
    const {Firstname,Lastname,age}=req.body
    const finded_user=users.find((user)=> user.id===id)
   
    if(Firstname)finded_user.Firstname=Firstname
    if(Lastname)finded_user.Lastname=Lastname
    if(age)finded_user.age=age
    res.send(`User with id ${id} has been updated`)
}
export const dispuser=(req,res)=>
{
   
      res.send(users)

}

