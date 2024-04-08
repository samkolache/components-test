import Logo from '../assets/logo.svg'
import Hamburger from '../assets/hamburger.svg'
import Close from '../assets/close.svg'
import {useState} from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className='bg-black'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex justify-between items-center px-3'>
                    <div>
                        <img src = {Logo} alt='logo' className='w-12' />
                    </div>
                    <div className='hidden md:flex text-white space-x-3'>
                        <a href="#" className='py-5 px-2 hover:text-gray-600'>Link 1</a>
                        <a href="#" className='py-5 px-2 hover:text-gray-600'>Link 2</a>
                        <a href="#" className='py-5 px-2 hover:text-gray-600'>Link 3</a>
                    </div> 
                    <div className='hidden md:flex'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Call to Action</button>
                    </div>
                    <div className='md:hidden flex items-center text-white py-5'>
                    {!isOpen && <img src={Hamburger} alt='menu' className='w-8 cursor-pointer' onClick={() => setIsOpen(!isOpen)} />} 
                    {isOpen &&<img src={Close} alt='close' className='w-4 cursor-pointer' onClick={() => setIsOpen(!isOpen)} />}
                        
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='text-white'>
                    <a href="#" className='block py-3 px-2 hover:bg-gray-500 text-sm'>Link 1</a>
                    <a href="#" className='block py-3 px-2 hover:bg-gray-500 text-sm'>Link 2</a>
                    <a href="#" className='block py-3 px-2 hover:bg-gray-500 text-sm'>Link 3</a>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded mb-3 ml-1'>Call to Action</button>
                </div>
            )}
            
        </nav>
        </>
    )
}


const NavLinks = () => {
    return(
        <div>
            
        </div>
    )
}

export default Navbar;