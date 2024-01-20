import React, { useState } from "react";
import { loginUserApi } from "../apis/Api";
import { toast } from "react-toastify";
import wall from '../images/wall.jpg';
import { useNavigate } from 'react-router-dom'; 
import Navbar from "../components/Navbar";
import UpNavbar from "../components/UpNavbar";
const Login = () => {
  const navigate = useNavigate();

  const bgImage = {
    backgroundImage: `url(${wall})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    const data = {
      email: email,
      password: password,
    };

    // making API Call
    // const response  = loginUserApi(data)
    // console.log(response.data)
    // if(response.data.success == false){
    //     toast.error(response.data.message)
    // } else if (response.data.success == true){
    //     toast.success(response.data.message)
    // } else {
    //     toast.error("Server Error")
    // }

    loginUserApi(data)
      .then((res) => {
        if (res.data.success == false) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
          // set token and user data in local storage
          localStorage.setItem("token", res.data.token);
          navigate('/products');

          // set user data
          const jsonDecode = JSON.stringify(res.data.userData);
          localStorage.setItem("user", jsonDecode);
        }
      })
      .catch((err) => {
        toast.error("Server Error");
        console.log(err.message);
      });
  };

  return (
    <>
     <div>
      <UpNavbar/>
    </div>
    <div>
      <Navbar />
    </div><><div style={bgImage}>

    </div><div style={{ position: "fixed", top: "80px", right: "20px", borderRadius: "8px" }}>
          <div style={{ backgroundColor: "white", padding: "30px", borderRadius: "4px", }}>
            <h1 style={{ color: "green", fontSize: "2em", fontWeight: "bold", textAlign: "center", marginBottom: "20px" }}>
              Welcome to NursyEase
            </h1>

            <form style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ color: "#333", marginBottom: "5px" }}>Email Address</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                style={{ padding: "10px", marginBottom: "15px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} />
              <label style={{ color: "#333", marginBottom: "5px" }}>Password</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                style={{ padding: "10px", marginBottom: "20px", width: "100%", borderRadius: "4px", border: "1px solid #ccc" }} />
              <button
                style={{
                  backgroundColor: "#28a745",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "1em",
                  fontWeight: "bold",
                  transition: "background-color 0.3s",
                }}
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </form>
            <p style={{ textAlign: "center", marginTop: "20px", color: "#666" }}>
              New Customer?{" "}
              <a href="/signup" style={{ color: "#333", textDecoration: "none" }}>
                Create an account
              </a>
            </p>
          </div>
        </div></></>
  );
};

export default Login;
