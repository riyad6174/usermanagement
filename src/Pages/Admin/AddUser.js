import React from 'react'

const AddUser = () => {
  return (
    <div className="flex flex-col">
    <div className="flex justify-center my-5">
      <h1>Add New User</h1>
    </div>
    <div className="flex flex-col p-20 ">
      <input
        placeholder="Username"
        className="border-2 border-slate-600 "
      ></input>
      <input
        placeholder="Role"
        className="border-2 border-slate-600"
      ></input>
      <input
        placeholder="Age"
        className="border-2 border-slate-600"
      ></input>

      <button className="bg-black w-full text-white py-2  my-5 hover:bg-gray-600 ">
       
        Add User
      </button>
    </div>
  </div>
  )
}

export default AddUser