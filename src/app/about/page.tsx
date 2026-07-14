import React from 'react';
import Link from 'next/link';
import { ShoppingBag, PlusCircle, BarChart3, Users, Globe2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
  <div className="flex gap-4 p-5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 shadow-sm">
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 dark:bg-orange-950/40 text-orange-600">
      {icon}
    </div>
    <div>
      <h4 className="text-base font-bold text-neutral-900 dark:text-white">{title}</h4>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function AboutPage() {
  return (
    <div className="w-full bg-white dark:bg-neutral-950 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section 1: Hero Intro */}
        <div className="max-w-3xl mb-20">
          <span className="text-orange-600 font-semibold text-xs uppercase tracking-widest block mb-2">
            Our Story
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl">
            Reimagining how goods <span className="text-orange-600">Flow</span> across the web.
          </h1>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Cart-Flow was founded with a singular, disruptive mission: to tear down the walls separating digital consumers, independent product creators, and modern store managers. We believe commerce shouldn't be segmented into different confusing software applications. 
          </p>
        </div>

        {/* Section 2: Core Pillars (Three Pillars Layout) */}
        <div className="grid gap-8 md:grid-cols-3 border-y border-neutral-200/80 dark:border-neutral-800/80 py-12 mb-20">
          <div className="space-y-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600 text-white">
              <ShoppingBag className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Fluid Buying</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Browse an endless, highly-curated decentralized registry of high-end items listed safely by trusted, verified creators around the globe.
            </p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600 text-white">
              <PlusCircle className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Frictionless Listing</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Turn your passions into passive or active revenue. Our wizard formats your operational properties and lists your products in minutes.
            </p>
          </div>
          <div className="space-y-3">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-orange-600 text-white">
              <BarChart3 className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Complete Management</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Track real-time data metrics, optimize logistics pipeline processing, and supervise inventory status under a unified control panel.
            </p>
          </div>
        </div>

        {/* Section 3: Deep Dive Split View */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-20">
          <div>
            <span className="text-orange-600 font-semibold text-xs uppercase tracking-widest block mb-1">
              Why We Are Different
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-4xl">
              We stand firmly behind peer-to-peer economic transparency.
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Traditional marketplaces profit heavily by locking vendors into walled gardens, masking analytical pipelines, and overcharging commission fees. Cart-Flow resets the balance by positioning the buyer and the seller inside the exact same operational dashboard. 
            </p>
            <div className="mt-6 flex items-center gap-6">
              <div>
                <span className="text-3xl font-black text-orange-600 block">99.8%</span>
                <span className="text-xs text-neutral-500 uppercase font-medium tracking-wider">Transaction Uptime</span>
              </div>
              <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-800" />
              <div>
                <span className="text-3xl font-black text-orange-600 block">2 Mins</span>
                <span className="text-xs text-neutral-500 uppercase font-medium tracking-wider">Average Shop Setup</span>
              </div>
            </div>
          </div>

          {/* Right Side Cards Grid */}
          <div className="grid gap-4 sm:grid-cols-1">
            <ValueCard 
              icon={<ShieldCheck className="h-5 w-5" />}
              title="Built on Total Trust"
              description="Our standard escrow architecture keeps payment tokens isolated safely until delivery conditions are fully satisfied."
            />
            <ValueCard 
              icon={<Users className="h-5 w-5" />}
              title="Community Driven Hub"
              description="We serve thousands of creators globally, providing structural infrastructure for continuous scaling."
            />
            <ValueCard 
              icon={<Globe2 className="h-5 w-5" />}
              title="Eco-System Fluidity"
              description="Engineered using bleeding edge web components ensuring lightweight operational speeds anywhere on Earth."
            />
          </div>
        </div>

        {/* Section 4: Bottom Call To Action */}
        <div className="relative rounded-2xl overflow-hidden bg-neutral-900 dark:bg-neutral-900 p-8 md:p-12 text-center text-white shadow-xl">
          {/* Subtle Grid Backdrop for the CTA block */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute -left-16 -top-16 h-40 w-40 rounded-full bg-orange-600/20 blur-2xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold sm:text-3xl">Be Part of the Commerce Revolution</h3>
            <p className="mt-3 text-sm text-neutral-300 leading-relaxed">
              Whether you are shopping for top-tier items, showing off unique creations, or seeking high-performance store metrics, Cart-Flow works beautifully for you.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/products" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 text-sm font-semibold text-white shadow-md shadow-orange-600/10 hover:bg-orange-500 transition-colors w-full sm:w-auto">
                Start Browsing
              </Link>
              <Link href="/add-product" className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-neutral-700 bg-neutral-800 px-5 text-sm font-semibold text-neutral-200 hover:bg-neutral-700 transition-colors w-full sm:w-auto">
             Add Product
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}