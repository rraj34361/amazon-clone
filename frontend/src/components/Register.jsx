import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useState } from 'react'
import axios from '../../axios.config'
const Register = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()
     
    
    const register =async (e)=>{
        e.preventDefault()
      let response = await axios.post('/register',{email , password, name , phone} ) 
      navigate('/login')
      console.log(response.data.data)
      
    }


  return (
   <>
   <div className="login">
    <Link to = '/'>
          <img className='login__logo' src="https://economictimes.indiatimes.com/thumb/msid-59738992,width-640,height-480,resizemode-75,imgsize-25499/amazon.jpg" alt=""  />
    </Link>
    <div className="login__container">
        <h1>Create Account</h1>
        <form >
            <h5>Your name</h5>
            <input value={name} onChange={e=>setName(e.target.value)} type="text" required />
            <h5>Mobile number</h5>
            <input value={phone} onChange={e=>setPhone(e.target.value)} type="text" required />
            <h5>E-mail</h5>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
            <h5>Password</h5>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
            <p>By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.</p>
            <button className='login__signInButton'  onClick={register}>Continue</button>
        </form>
        <p>
          Already have an account?  <Link to = '/login'>  <button  className='btn'>Sign in</button></Link>
        </p>
     </div>
   </div>
   </>
  )
}

export default Register