import React from 'react'
import "./index.scss"
import {Helmet} from "react-helmet";
const Login = () => {
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Login</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      
      <div className='login'>
      <form action=''>
        <h2>Giriş</h2>
        <div className='code'>
        <input type='email' placeholder='Email' className='box'></input>
        <input type='pasword' placeholder='Parol' className='box'></input>
        </div>
        <div className='submit'>
         <p className='parol'>Parolu unutmusunuz? <a href='#'>Buraya Kilikləyin</a></p>
        <input type='submit' value='Daxil olun'></input>
        <p>Başqa yolla daxil olun</p>
        <div className='social'>
          <a href='#'>Google</a>
          <a href='#'>Facebook</a>
        </div>
        <p>Hesabınız yoxdur? <a href='#'>Yenisini yaradın</a></p> 
        </div>
        
      </form>
    </div>
    </div>
  )
}

export default Login
