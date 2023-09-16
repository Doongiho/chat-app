import React from 'react'
import { Link } from 'react-router-dom'

function ReigistePage() {
  return (
    <div className="auth-wrapper">
      <div style={{textAlign:'center'}}>
        <h3>Register</h3>
      </div>
       <form>
       <label>Email</label>
      <input
         name="email"
         type="email"
        // {...register("exampleRequired", { required: true, maxLength: 10 })}
      />
      {/* {errors.exampleRequired && <p>This field is required</p>} */}
      <label>Name</label>
      <input
       nmae ="name"
        // {...register("exampleRequired", { required: true, maxLength: 10 })}
      />
      {/* {errors.exampleRequired && <p>This field is required</p>} */}
      <label>Password</label>
      <input
        name='password'
        type='password'
        // {...register("exampleRequired", { required: true, maxLength: 10 })}
      />
      {/* {errors.exampleRequired && <p>This field is required</p>} */}
      <label>Password Confirm</label>
      <input
        name='password_confirm'
        type='password'
        // {...register("exampleRequired", { required: true, maxLength: 10 })}
      />
      {/* {errors.exampleRequired && <p>This field is required</p>} */}
      
       <input type="submit" />
       <Link style={{color:'gray', textDecoration:'none'}} to="login">
         로그인하기
       </Link>
    </form>
    </div>
  )
}

export default ReigistePage
