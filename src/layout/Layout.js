import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative bg-[#102428]">
      <header className="w-full bg-[#102428]">
        <Navbar />
      </header>
      <div className='bg-[#102428]'>
        <main className="">{children}</main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;