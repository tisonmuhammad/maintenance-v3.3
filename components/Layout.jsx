import React from "react";
import Navbar from "../components/Navbar";
import Bawah from "../components/Bawah";

const Header = () => {
    return <Navbar/>;
};
  
const Footer = () => {
    return <Bawah/>;
};
  
const Layout = ({ children }) => {
    return (
        <>
            <div className="_konten">
                <div className="_kontenmain">
                    <div className="_kontenmains">
                        <Header />
                            {children}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};
  
export default Layout;