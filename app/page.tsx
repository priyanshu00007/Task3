import React from 'react'
import {Button} from "@nextui-org/react";

const page = () => {
  return (
    <div >
      <ul className='flex justify-between p-10  max-w-full'>
        <li className='text-2xl font-bold'>Dashboard</li>
        <Button size="md" className='bg-blue-600 text-white pr-5 pl-5'>
        Contact Us
      </Button>
      </ul>
    </div>
  )
}

export default page