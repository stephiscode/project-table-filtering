import React from 'react'

function Sidebar() {
  return (
    <div className='w-18 fixed h-screen border border-[#242424] p-4 flex flex-col items-center space-y-8'>
        <div className='text-white'>Logo</div>
        <div className="text-gray-400">🗂️</div>
        <div className="text-gray-400">👨‍💼</div>
        <div className="text-gray-400">⚙️</div>
    </div>
  )
}
export default Sidebar