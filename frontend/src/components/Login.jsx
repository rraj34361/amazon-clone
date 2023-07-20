 import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
// import { auth } from '../firebase'
import axios from '../../axios.config'

const Login = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()
    const signIn = async (e)=>{
    e.preventDefault();
    e.preventDefault()
    let response = await axios.post('/login',{email : email, password : password} ) 

    console.log(response.data.data)
       localStorage.setItem('token', response.data.data.token)
       navigate('/')

    }
    
    


  return (
   <>
   <div className="login">
    <Link to = '/'>
          <img className='login__logo' src="https://economictimes.indiatimes.com/thumb/msid-59738992,width-640,height-480,resizemode-75,imgsize-25499/amazon.jpg" alt=""  />
    </Link>
    <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
            <h5>E-mail</h5>
            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required />
            <h5>Password</h5>
            <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required />
            <button className='login__signInButton'  onClick={signIn}>Sign In</button>
        </form>
        <p>
        By continuing, you agree to Amazon Conditions of Use and Privacy Notice. 
        </p>
       <Link to = '/register'><button   className='login__signUpButton'>Create your Amazon account</button>
</Link>
    </div>
   </div>
   </>
  )
}

export default Login