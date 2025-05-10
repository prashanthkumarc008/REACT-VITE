import { useState } from "react";

function FormUser() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleForm = (e) => {
    if (e.type === "change") {
      const { name, value } = e.target;
      setUser((prevUser) => ({
        ...prevUser,
        [name]: value
      }));
    } else if (e.type === "submit") {
      e.preventDefault();
      console.log("User:", user);
      alert(JSON.stringify(user));
    }
  };
  return (
    <div className="container">
        <h1>Form Handling with IF - ELSE Statement</h1>
        <h2>IF-ELSE</h2>
      <pre>{JSON.stringify(user)}</pre>
      <form onSubmit={handleForm}>
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleForm}
          placeholder="Email"
        /><br/>
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleForm}
          placeholder="Password"
        /><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormUser;