import React from 'react';
import { ShieldCheck, Zap, Layers, Users2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, badge }) => {
  return (
    <div className="group relative rounded-2xl border border-neutral-200/70 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-950/40 text-orange-600 transition-colors duration-300 group-hover:bg-orange-600 group-hover:text-white">
          {icon}
        </div>
        {badge && (
          <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-0.5 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            {badge}
          </span>
        )}
      </div>
      <h3 className="mt-4 text-xl font-bold text-neutral-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </div>
  );
};

export default async function WhyChooseUs() {

const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userr = session?.user;

  return (
    <section className="w-full py-20 bg-neutral-50/30 dark:bg-neutral-950/5 relative overflow-hidden">
      
      {/* Decorative background visual blob */}
      <div className="absolute -right-20 bottom-0 -z-10 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="grid gap-4 md:grid-cols-2 md:items-end mb-14">
          <div>
            <span className="text-orange-600 font-semibold text-xs uppercase tracking-widest block mb-1">
              The Cart-Flow Advantage
            </span>
            <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl tracking-tight">
              Built for Modern Buyers & Passionate Sellers
            </h2>
          </div>
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg max-w-xl md:justify-self-end">
            We removed the traditional friction between listing a product and securing a payout. Experience absolute fluid control over your commerce ecosystem.
          </p>
        </div>

        {/* Feature Grid Layout */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureItem 
            icon={<Zap className="h-5 w-5" />}
            title="Instant Setup"
            description="List your products inside our simplified portal in under 2 minutes. Fill out key technical attributes and you are live."
            badge="Fast"
          />
          <FeatureItem 
            icon={<ShieldCheck className="h-5 w-5" />}
            title="Secured Escrow"
            description="Rest easy knowing transactions are safe. Funds are protected until the product successfully delivers to the buyer."
            badge="Safe"
          />
          <FeatureItem 
            icon={<Layers className="h-5 w-5" />}
            title="Unified Dashboard"
            description="Zero fragmentation. Switch instantly between tracking deliveries as a buyer or monitoring revenue analytics as a seller."
          />
          <FeatureItem 
            icon={<Users2 className="h-5 w-5" />}
            title="Dynamic Community"
            description="Direct message creators, read transparent customer feedback, and join an ecosystem built entirely on peer trust."
          />
        </div>

        {/* Dynamic Summary CTA */}
        {
            !userr && 
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 p-8 text-white shadow-xl shadow-orange-600/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold">Ready to take control of your commercial workflow?</h4>
            <p className="text-orange-100 text-sm mt-1 max-w-xl">
              Join thousands of everyday users listing, scaling, and managing storefronts with complete asset autonomy.
            </p>
          </div>
        <Link href={'/login'}>
          <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-orange-600 shadow-sm transition-all duration-200 hover:bg-orange-50 shrink-0">
            Create Free Account
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </Link>
        </div>
        }

      </div>
    </section>
  );
}