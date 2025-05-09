import { useState } from "react";

function FormUser2() {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleForm = (e) => {
    switch (e.type) {
      case "change":
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value
        }));
        break;
      case "submit":
        e.preventDefault();
        console.log("User:", user);
        alert(JSON.stringify(user));
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
    <h1>Form Handling with SWITCH Statement</h1>
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

export default FormUser2;