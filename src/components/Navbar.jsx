import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-black '>
            <div className="mycontainer flex  justify-between items-center h-12 px-15 py-5">

                <div className="logo font-bold text-white text-xl">
                    <span className='text-blue-500'>&lt;</span>
                    Pass
                    <span className='text-blue-500'>MAN/&gt;</span>
                </div>
                {/* <ul >
                    <li className='flex gap-4 text-white'>
                        <a href="#" className='hover:font-bold'>Home</a>
                        <a href="#" className='hover:font-bold'>About</a>
                        <a href="#" className='hover:font-bold'>Contact us</a>

                    </li>
                </ul> */}
                <a href="https://github.com/its-srisurya/PassMAN" target='_blank'>
                <button className='text-black bg-blue-600  my-0.5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1'> 
                    <img className=' w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
                </a>
            </div>

        </nav>
    )
}

export default Navbar
