import React from 'react'

export const TodoItem = ({id,name,email,phone,task, status}) => {
  return (
    <div className="flex mt-10 justify-center bg-white">
    <div className="col-span-12">
      <div className="overflow-auto lg:overflow-visible">
        <table className="table text-gray-400 border-separate space-y-6 text-sm">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Task</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-200 lg:text-black">
              <td className="p-3 font-medium capitalize">{name}</td>
              <td className="p-3">{email}</td>
              <td className="p-3">{phone}</td>
              <td className="p-3 uppercase">{task}</td>
              <td className="p-3">
                <span className="bg-green-400 text-gray-50 rounded-md px-2">{status? "Completed" : "Pending"}</span>
              </td>
              <td className="p-3 flex gap-10">
               <button className='border w-12 font-semibold text-white bg-emerald-500'>Edit</button>
               <button className='border w-20 font-semibold text-white bg-red-600'>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
