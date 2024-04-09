import Logo from '../assets/logo.svg'
import Hamburger from '../assets/hamburger.svg'
import Close from '../assets/close.svg'
import {useState} from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <nav className='bg-black'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center px-3'>
                    <div>
                        <img src = {Logo} alt='logo' className='w-12' />
                    </div>
                    <div className='hidden md:flex text-white space-x-3'>
                        <a href="#" className='py-5 px-2 hover:text-gray-600'>Link 1</a>
                        <NavLinks href='#' Flyoutcontent = {NavContent}>
                            Link 2
                        </NavLinks>
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


const NavLinks = ({children, href, Flyoutcontent}) => {

    const [open, setOpen] = useState(false);

    const showFlyout = open && Flyoutcontent;



    return(
        <div 
        className='relative flex items-center'
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}

        >
            <a href={href} className='relative text-white'>
                {children}
                <span 
                style={{
                    transform: showFlyout ? "scaleX(1)" : "scaleX(0)"
                }}
                className='absolute -bottom-2 -left-2 -right-2 h-1 
                origin-left rounded-full bg-indigo-300 transition-transform 
                duration-300 ease-out' />
            </a>
            {showFlyout && (
            <div className='absolute left-1/2 top-20 -translate-x-1/2 bg-white
             text-black'>
                <div className='absolute -top-8 left-0 right-0 h-6'> </div>
                <div className='absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2
                -translate-y-1/2 rotate-45 bg-purple-200'> </div>
                <Flyoutcontent /> 
            </div>
            )}
        </div>
    )
}

const NavContent = () => {
    return(
        <div className='min-h-64 w-48 rounded-lg bg-purple-200 p-6 shadow-xl flex flex-col justify-start gap-y-4'>
        <a href='#' className='w-full text-center py-2  rounded hover:bg-purple-300 transition-colors duration-150'>Sublink 1</a>
        <a href='#' className='w-full text-center py-2  rounded hover:bg-purple-300 transition-colors duration-150'>Sublink 2</a>
        <a href='#' className='w-full text-center py-2  rounded hover:bg-purple-300 transition-colors duration-150'>Sublink 3</a>
    </div>
    )
}

export default Navbar;