import React from "react";
import {
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'
export const TodoInput = () => {
  return (
    <div className="w-full h-screen bg-gray-100 pt-8">
      <div className="bg-white p-3 max-w-md mx-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-center">ToDo App</h1>
          <div className="mt-4 flex flex-col">
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Name" />
              <FormLabel>Email</FormLabel>
              <Input placeholder="Enail" />
              <FormLabel>Phone</FormLabel>
              <Input placeholder="Phone" />
              <FormLabel>Task</FormLabel>
              <Input placeholder="Task" />
              <FormLabel>Status</FormLabel>
              <input className="w-10 h-8" type="checkbox" placeholder="Status" />
            </FormControl>

            <button className=" ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex">
              <svg
                className="h-6 w-[100%]"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="9" />{" "}
                <line x1="9" y1="12" x2="15" y2="12" />{" "}
                <line x1="12" y1="9" x2="12" y2="15" />
              </svg>
            </button>
          </div>
        </div>
        {/* <div className="mt-8">
                    <ul>
                            <li className="p-2 rounded-lg" >
                                <div className="flex align-middle flex-row justify-between">
                                    <div className="p-2">
                                        <input type="checkbox" className="h-6 w-6 " value="true" checked/>
                                    </div>
                                    <div className="p-2">
                                        <p className="text-lg line-through text-gray-400">Cook maggie</p>
                                    </div>
                                    <button 
                                        className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                                        <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                        <span>Remove</span>
                                    </button>
                                </div>
                                <hr className="mt-2"/>
                            </li>
                            <li className="p-2 rounded-lg" >
                                <div className="flex align-middle flex-row justify-between">
                                    <div className="p-2">
                                        <input type="checkbox" className="h-6 w-6 " value="true" />
                                    </div>
                                    <div className="p-2">
                                        <p className="text-lg text-black">Wash disc</p>
                                    </div>
                                    <button 
                                        className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
                                        <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
                                        <span>Remove</span>
                                    </button>
                                </div>
                                <hr className="mt-2"/>
                            </li>
                    </ul>
                </div>
                <div className="mt-8">
                    <button 
                        className="border-2 border-red-500 p-2 text-red-500"
                    >Clear Completed Task</button>
                    <button 
                        className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
                    >Reset Todo List</button>
                </div> */}
      </div>
    </div>
  );
};
