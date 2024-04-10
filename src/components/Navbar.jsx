import Logo from '../assets/logo.svg'
import Hamburger from '../assets/hamburger.svg'
import Close from '../assets/close.svg'
import IntegrationIcon from '../assets/integration.svg'
import Opti from '../assets/opti.svg'
import Custom from '../assets/custom.svg'
import Visual from '../assets/visual.svg'
import Dropdown from '../assets/dropdown.svg'
import {useState} from 'react'

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isFlyOpen, setFlyOpen] = useState(false)

    return (
        <>
        <nav className='relative'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center px-3'>
                    <div>
                        <a href = '#'>
                            <img src = {Logo} alt='logo' className='w-12' />
                        </a>
                    </div>
                    <div className='hidden md:flex text-black space-x-3'>
                        <a href="#" className='py-5 px-2 hover:text-gray-600'>About Us</a>
                        <a href="#" className='py-5 px-2 hover:text-gray-600 pr-1 flex items-center' onClick={() => setFlyOpen(!isFlyOpen)}>
                            Products
                            <img src={Dropdown} className='w-5 cursor-pointer'/>
                        </a>
                        <a href="#" className='py-5 px-2 hover:text-gray-600'>Blog</a>
                        <a href="#" className='py-5 px-2 hover:text-gray-600'>Contact Us</a>
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
                <div className='text-black md:hidden'>
                    <a href="#" className='block py-3 px-2 text-md text-center hover:text-gray-600'>About Us</a>
                    <hr className="my-3 h-0.5 w-1/2 border-t-0 bg-gray-300 mx-auto" />
                    <a href="#" className='block py-3 px-2 hover:text-gray-600 text-md text-center'>
                        Products
                    </a>
                    <hr className="my-3 h-0.5 w-1/2 border-t-0 bg-gray-300 mx-auto" />
                    <a href="#" className='block py-3 px-2 hover:text-gray-600 text-md text-center'>Blog</a>
                    <hr className="my-3 h-0.5 w-1/2 border-t-0 bg-gray-300 mx-auto" />
                    <a href="#" className='block py-3 px-2 hover:text-gray-600 text-md text-center'>Contact Us</a>
                    <hr className="my-3 h-0.5 w-1/2 border-t-0 bg-gray-300 mx-auto" />
                    <a href="#" className='block py-3 px-2 hover:text-gray-600 text-md text-center'>Log in</a>
                </div>
            )}
            {isFlyOpen && <FlyOut />}
            <MegaMenu />
        </nav>

        </>
    )
}

const FlyOut = () => {
    return(
        <div className='w-screen max-w-sm bg-white rounded-3xl shadow-lg border-solid border-2 absolute left-1/2 
        transform -translate-x-1/2 z-10 md:block hidden '>
            <div className='p-4 space-y-3'>
                <FlyOutItem
                    src = {IntegrationIcon}
                    title = "Integration"
                    desc = "Seamlessly connect all your different systems"
                />
                <FlyOutItem
                    src={Opti}
                    title= "Optimization"
                    desc = "Improve effciency of processes or systems"
                />
                <FlyOutItem 
                src={Custom}
                title= "Customization"
                desc = "Tailor your business to specific needs"
            />
            <FlyOutItem 
                src={Visual}
                title= "Visualization"
                desc = "Represent your data in a way you can see"
            />
            </div>
        </div>
    )
}


const FlyOutItem = ( {src, title, desc}) => {
    return (
        <div className="flex items-center space-x-6 hover:bg-gray-100 rounded-lg p-3 cursor-pointer">
            <div className='w-8 h-8 flex items-center justify-center'>
                <img src={src} alt='logo' className='w-6' />
            </div>
            <div className='space-y-1'>       
                <h1 className="text-md font-bold">{title}</h1>
                <p className="text-sm">{desc}</p>
            </div>
        </div>
    )
}

const MegaMenu = () => {
    return(
        <div className='w-screen max-h-lg  bg-white  shadow-lg border-solid border-2 absolute left-1/2 
        transform -translate-x-1/2 z-10 md:block hidden '>
            <div className='p-4 space-y-3'>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </div>
        </div>
    )
}

export default Navbar;