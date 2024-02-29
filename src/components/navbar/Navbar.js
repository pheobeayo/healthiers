import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';



const Navbar = () => {

    return (
        <nav class="bg-[#102428]">
            <div className='fixed top-0 right-0 left-0 bg-gradient z-50 bg-[#102428]'>
                <div className='flex gap-4 justify-center items-center mx-4 pt-10 mb-2'>
                  <Link to='/'><img src={logo} alt="logo" /></Link>
                   
                    <ul className='flex m-auto gap-10'>
                    <li className='hidden md:inline-block text-white '><Link to='/'>Home</Link></li>
                    <li className='hidden md:inline-block text-white '><Link to='/about'>About us</Link></li>
                    <li className='hidden md:inline-block text-white '><Link to='/sign-up'>Sign up</Link></li>
                    <li className='hidden md:inline-block text-white '><Link to='/sign-in'>Sign in</Link></li>
                    <li className='hidden md:inline-block text-white '><Link to='/my-nfts'>My NFTs</Link></li>
                    <li className='hidden md:inline-block text-white '><Link to='/market-place'>Marketplace</Link></li>
                        
                    </ul>
                    <div class='mx-4'>
                        
                        <ConnectButton />
                    </div>
                    <div class="p-16 space-y-2 rounded shadow">
                        <Link to='/sign-in'> <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span> </Link>
                        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
                        <Link to='/sign-up' style={{ marginTop: '1rem' }}><span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span></Link>
                    </div>
                </div>
            </div>
        </nav>
    )



}

export default Navbar;