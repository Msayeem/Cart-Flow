import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Shield, Heart } from 'lucide-react';
import { LogoGithub, LogoLinkedin } from '@gravity-ui/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-orange-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400">
      
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Column (Spans 2 columns on desktop) */}
        <div className="col-span-2 flex flex-col justify-between space-y-4">
          <div>
             <Link 
                    className="group flex items-center gap-2 text-2xl font-medium tracking-tight text-slate-900" 
                    href={'/'}
                >
                    <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text font-bold text-transparent text-[20px]">
                        Cart-Flow
                    </span>
                </Link>
            <p className="mt-4 text-sm max-w-sm leading-relaxed">
              The modern marketplace where users can buy quality goods, seamlessly list their own creations, and manage operations through a single fluid dashboard.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            <a 
              href="https://github.com/Msayeem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-all"
              aria-label="GitHub Profile"
            >
              <LogoGithub className="h-4 w-4" />
            </a>
            <a 
              href="https://www.linkedin.com/in/sayem-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-9 w-9 flex items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-orange-500/40 hover:text-orange-600 dark:hover:text-orange-400 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LogoLinkedin className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2 - Marketplace */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white mb-4">
            Marketplace
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/products" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">All Products</Link></li>
            <li><Link href="/cart" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Cart</Link></li>
          </ul>
        </div>

        {/* Column 3 - Storefront Management */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white mb-4">
            Sellers
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link href="/add-product" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors">Add Product</Link></li>
            <li><Link href="/manage" className="hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-1">Manage Product</Link></li>
          </ul>
        </div>

    

      </div>

      {/* Lower Copyright Ribbon */}
      <div className="border-t border-neutral-100 dark:border-neutral-900/60 bg-neutral-50/50 dark:bg-neutral-950/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Cart-Flow. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="h-3 w-3 text-orange-600 fill-orange-600" /> using Next.js & Tailwind v4
          </p>
        </div>
      </div>
      
    </footer>
  );
}