import React from 'react';
import { ShoppingBag, PlusCircle, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800/50 bg-white/70 dark:bg-neutral-900/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/5 cursor-pointer"
    >
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-600/5 blur-xl transition-all duration-500 group-hover:bg-orange-600/10" />
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-950/30 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-20 dark:bg-neutral-950 lg:py-32">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.orange.100),white)] opacity-40 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.orange.950),black)] dark:opacity-30" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-neutral-950 shadow-xl shadow-orange-600/5 ring-1 ring-neutral-50 dark:ring-neutral-900/10" />
      
      {/* Dynamic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 dark:border-orange-900/60 bg-orange-50/50 dark:bg-orange-950/20 px-4 py-1.5 text-xs font-semibold text-orange-700 dark:text-orange-400 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-orange-600 animate-pulse" />
            Empowering Modern Commerce
          </div>

          {/* Heading */}
          <h1 className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Streamline Your Shop with <span className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">Cart-Flow</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl">
            The all-in-one commercial playground. Buy high-quality products, list your own creations, and manage your inventory with state-of-the-art tools.
          </p>

          {/* Core Call to Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link href={'/products'}>
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 font-semibold text-white shadow-lg shadow-orange-600/20 transition-all duration-200 hover:bg-orange-500 hover:shadow-orange-500/20 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2">
              Start Exploring
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        <Link href={'/add-product'}>
            <button className="inline-flex h-12 items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-6 font-semibold text-neutral-700 dark:text-neutral-300 transition-colors duration-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none">
              Sell Product
            </button>
        </Link>
          </div>

          {/* Interactive Feature Cards Grid */}
          <div className="mt-20 grid w-full max-w-5xl gap-6 sm:grid-cols-3">
            <FeatureCard 
              icon={<ShoppingBag className="h-6 w-6" />}
              title="Buy Products"
              description="Explore thousands of curated physical and digital items from verified makers and brands worldwide."
            />
            <FeatureCard 
              icon={<PlusCircle className="h-6 w-6" />}
              title="Add Yours"
              description="Upload your listings instantly with our rich, step-by-step product creation wizard."
            />
            <FeatureCard 
              icon={<Settings className="h-6 w-6" />}
              title="Manage Flow"
              description="Keep track of order processing, shipping status, and earnings from your interactive dashboard."
            />
          </div>

        </div>
      </div>
    </section>
  );
}