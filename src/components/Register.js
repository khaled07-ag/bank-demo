import React,{ useState } from 'react'
import {useMutation} from "@tanstack/react-query"
import { registerUser } from '../API/auth'
const Register = () => {
const [user, setUser] = useState({});
const handleChange = (e)=>{
    if(e.target.name ==="image"){
        setUser({...user , [e.target.name]:e.target.files[0]})
    }else{
        setUser({...user, [e.target.name]:e.target.value})
    }
}
const {mutate} = useMutation({
    mutationKey:["register"],
    mutationFn:()=>registerUser(user)

    
}) 
const handleSubmit = (e)=>{
    e.preventDefualt();
    console.log(user);
    mutate();
    
}

  return (
    <div className='bg-blue-300 justify-center flex items-center h-[100vh]'>
        <div className='border p-5 rounded-xl bg-white shadow-2xl'>
        <form onSubmit={handleSubmit}>
       <div className='flex flex-col gap-2 '>
       <h1 >Register</h1> 
       <div>
        <label>Username: </label>
       <input
       type='name'
       onChange={handleChange} 
       />
       </div>
       <div>
        <label>Password: </label>
       <input
       type="password"
       onChange={handleChange}
       className=''
       />
       </div>
       <input
       type="file" accept="image/*" />
       <button
       type='submit'
       className=''>
        Register
       </button>
       </div>
       </form>
       </div>
       
    </div>
  )
}

export default Register