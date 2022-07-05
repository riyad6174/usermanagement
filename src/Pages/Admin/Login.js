import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate =useNavigate()
  const [data, setdata] = useState({
    email: "",
    password: "",
  });


  const handleOnChange = (e) => {
    setdata({...data, [e.target.name]: e.target.value });
    console.log(e.target.value)
  };


  const handleOnsubmit = (e) => {
    e.preventDefault();
 if(data.email==='admin'&&data.password==='admin'){
  console.log('loggedIn')
  navigate('/dashboard')
 }
 else{
    console.log('wrong credentials')
 }
  
  };

  return (
    <>
      <div className="flex justify-center m-20">
        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
          <form>
            <div className="mb-6">
              <input
                type="text"
                name="email"
                value={data.email}
                onChange={handleOnChange}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                placeholder="Email address"
              />
            </div>

            <div className="mb-6">
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleOnChange}
                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
                placeholder="Password"
              />
            </div>

            <button
              className="inline-block px-7 py-3 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-gray-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={handleOnsubmit}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
