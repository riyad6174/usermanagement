import React from 'react'

const UserList = () => {
  return (
   <>
   <div className='flex justify-center my-20'>
   <table className="table-auto">
  <thead>
    <tr>
      <th className="px-4 py-2">User List</th>
      <th className="px-4 py-2">Role</th>
      <th className="px-4 py-2">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">Al Imran Hossain</td>
      <td className="border px-4 py-2">ReactJs & NodeJs</td>
      <td className="border px-4 py-2">23</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">Mr.Taufik Hassan</td>
      <td className="border px-4 py-2">HR</td>
      <td className="border px-4 py-2">32</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">Mr. Sadot Arefin</td>
      <td className="border px-4 py-2">Cheif Architect </td>
      <td className="border px-4 py-2">34</td>
    </tr>
  </tbody>
</table>
   </div>

   </>
  )
}

export default UserList