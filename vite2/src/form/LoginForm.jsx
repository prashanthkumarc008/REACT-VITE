import React, { useRef } from 'react';

function LoginForm() {
  // Create refs for email and password inputs
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Access input values using refs
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log('Email:', email, 'Password:', password);
    // Clear inputs
    emailRef.current.value = '';
    passwordRef.current.value = '';
    // Focus on email input after submit
    emailRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email: </label>
        <input type="email" ref={emailRef} placeholder="Enter email" />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" ref={passwordRef} placeholder="Enter password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;