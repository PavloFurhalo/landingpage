import React from 'react';

function Register({ setIsRegister }) {
  return (
    <div className="form-box register">
      <h2>Registration</h2>
      <form>
        <div className="input-box">
          <span className="icon"><ion-icon name="person"></ion-icon></span>
          <input type="text" required />
          <label>Username</label>
        </div>
        <div className="input-box">
          <span className="icon"><ion-icon name="mail"></ion-icon></span>
          <input type="email" required />
          <label>Email</label>
        </div>
        <div className="input-box">
          <span className="icon"><ion-icon name="lock-closed"></ion-icon></span>
          <input type="password" required />
          <label>Password</label>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />I agree to the terms and conditions</label>
        </div>
        <button type="submit" className="btn">Register</button>
        <div className="login-register">
          <p>Already have an account?<a href="#" onClick={() => setIsRegister(false)} className="login-link">Login</a></p>
        </div>
      </form>
    </div>
  );
}

export default Register;
