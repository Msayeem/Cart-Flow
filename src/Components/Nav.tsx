"use client";

import { authClient } from '@/lib/auth-client';
import { Avatar } from "@heroui/react";
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'; // Added to highlight the active tab
import { Menu, X, Trophy } from 'lucide-react'; // Clean modern icons
import UserSetting from './UserSetting';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'My Cart', href: '/my-bookings' },
        { name: 'Add Product', href: '/add-facility' },
        { name: 'Manage Products', href: '/manage-facility' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <nav className="mx-auto flex h-16 w-[90%] max-w-7xl items-center justify-between">
                
                {/* Logo Section */}
                <Link 
                    className="group flex items-center gap-2 text-2xl font-medium tracking-tight text-slate-900" 
                    href={'/'}
                >
                    <span>
                        Cart-<span className="font-bold text-green-600 transition-colors duration-300 group-hover:text-green-500">Flow</span>
                    </span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden items-center gap-1 md:flex lg:gap-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                                    isActive 
                                        ? 'text-green-600 bg-green-50' 
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                            >
                                {link.name}
                                {/* Micro-interaction underline effect */}
                                {!isActive && (
                                    <span className="absolute bottom-1 left-4 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-[calc(100%-32px)]" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Action Buttons & Profile */}
                <div className="hidden items-center gap-4 md:flex">
                    {user ? (
                        <div className="transition-transform duration-200 hover:scale-105">
                            <UserSetting />
                        </div>
                    ) : (
                        <Link 
                            href={'/login'}
                            className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-green-600 hover:shadow-green-100"
                        >
                            Login
                        </Link>
                    )}
                </div>

                {/* Mobile Hamburger Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    {user && <UserSetting />}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="h-6 w-6 transition-transform duration-200 rotate-90" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar Dropdown */}
            <div 
                className={`absolute left-0 top-16 w-full border-b border-gray-100 bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
                    isOpen ? 'opacity-100 translate-y-0 visibility-visible' : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
            >
                <div className="flex flex-col gap-2 px-6 py-4">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                                    isActive 
                                        ? 'bg-green-50 text-green-600' 
                                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    {!user && (
                        <Link 
                            href={'/login'}
                            onClick={() => setIsOpen(false)}
                            className="mt-2 text-center rounded-xl bg-slate-900 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-green-600"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Nav;