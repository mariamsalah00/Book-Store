import React from "react";
import NavbarLogo from "./Navbar/NavbarLogo";
import LinkItem from "./ui/LinkItem";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaEarthAmericas } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-[#3B2F4A]">
            {/* Top Section */}
            <div className="container mx-auto py-6 px-5">
                <div className="flex items-center justify-between flex-wrap gap-5">
                    {/* Logo & Navigation */}
                    <div className="flex items-center gap-10">
                        <NavbarLogo />
                        <nav className="flex items-center gap-8">
                            <LinkItem to="/">Home</LinkItem>
                            <LinkItem to="/books">Books</LinkItem>
                            <LinkItem to="/about">About Us</LinkItem>
                        </nav>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5">
                        <a href="#" className="text-white hover:text-yellow-500 transition">
                            <FaFacebook className="text-xl" />
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500 transition">
                            <FaInstagram className="text-xl" />
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500 transition">
                            <FaTwitter className="text-xl" />
                        </a>
                        <a href="#" className="text-white hover:text-yellow-500 transition">
                            <FaYoutube className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-600"></div>

            {/* Bottom Section */}
            <div className="container mx-auto py-4 px-5">
                <div className="flex items-center justify-between flex-wrap gap-4">
                    {/* Copyright */}
                    <p className="text-gray-400 text-sm">&lt;Developed By&gt; EraaSoft &lt;All Copy Rights Reserved @2024</p>

                    {/* Language Selector */}
                    <div className="flex items-center gap-2">
                        <FaEarthAmericas className="text-gray-400" />
                        <select className="bg-transparent text-white border border-gray-500 rounded-md px-3 py-1 text-sm focus:outline-none focus:border-yellow-500 cursor-pointer">
                            <option value="en" className="bg-[#3B2F4A]">
                                English
                            </option>
                            <option value="ar" className="bg-[#3B2F4A]">
                                العربية
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </footer>
    );
}
