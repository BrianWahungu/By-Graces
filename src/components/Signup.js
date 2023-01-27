import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
function Signup(){
   const [formData, setFormData] = useState({
    firstname: "",
    lastname:"",
    username:'',
    email: "",
    password: "",
    confirmpassword:''
  });
  let navigate = useNavigate();
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
        navigate("/login");
    }
    return (
        <div>
          <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
      <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          placeholder="firstname"
          name="firstname"
          id="firstname"
          onChange={handleChange}
          value={formData.firstname}
        />
        <label htmlFor="lastname">Lastname</label>
        <input
          type="text"
          placeholder="Lastname"
          name="lastname"
          id="lastname"
          onChange={handleChange}
          value={formData.lastname}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          onChange={handleChange}
          value={formData.username}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <label htmlFor="username">Confirm Password</label>
        <input
          type="password"
          placeholder="confirm password"
          name="confirmpassword"
          id="confirmppassword"
          onChange={handleChange}
          value={formData.confirmpassword}
        />
        <button type="submit">Submit</button>
      </form>
        </div>
    )
}
export default Signup