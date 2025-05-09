import { useState } from "react";

function FormUser() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User:", user);
    alert(JSON.stringify(user));
  };

  return (
    <div className="container">
        <pre>{JSON.stringify(user)}</pre>
        <form onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      /><br/>
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
      /><br/>
      <button type="submit">Submit</button>
    </form>
    </div>
        
    
  );
}

export default FormUser;