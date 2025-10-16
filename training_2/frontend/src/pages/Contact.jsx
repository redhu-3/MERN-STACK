import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const [form,setform]=useState(
    {
      name:"",
      email:"",
      password:"",
      confirmpassword:"",
      gender:"",
      dept:""

    }

  )
  const handleChange=(e)=>
  {
   const {name,value}=e.target
   setform([name],value)
   setform((prev)=>({
    ...prev,
    [name]:value
   }))
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(form)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name" className='name'>Name</label>
        <input type="text" value={form.name} name='name'onChange={handleChange}></input>
         <label htmlFor="email" className='email'>email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange}></input>
         <label htmlFor="passowrd" className='name'>password</label>
        <input type="text" value={form.password}></input>
         <label htmlFor="confirmpassowrd" className='confirm'>Confirm password</label>
        <input type="text" name="confirmpassword" value={form.confirmpassword}></input>
        <label className='name'>Gender</label>
        <input type="radio" name="gender" value="male" id="male" />
        <label htmlFor="male">Male</label>

        <input type="radio" name="gender" value="female" id="female" />
        <label htmlFor="female">Female</label>
        <button>submit</button>



      </form>
    </div>
  )
}

export default Contact
