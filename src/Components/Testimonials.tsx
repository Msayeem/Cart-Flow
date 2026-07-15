import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: 'Buyer' | 'Seller' | 'Store Manager';
  initials: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Seller",
    initials: "SJ",
    content: "The product creation wizard is a game-changer. I transitioned my entire handmade crafts catalog in under an hour. The unified dashboard makes tracking my daily sales completely effortless.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Buyer",
    initials: "DC",
    content: "I love the security Cart-Flow provides. Knowing my funds are held in escrow until my package arrives gives me total peace of mind when buying from independent creators.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Store Manager",
    initials: "ER",
    content: "Managing inventory used to require three different apps. Now I can monitor shipping statuses, view analytics, and adjust stock levels from one single screen. It's incredibly fluid.",
    rating: 5,
  },
  {
    id: 4,
    name: "Marcus Wright",
    role: "Buyer",
    initials: "MW",
    content: "The UI is insanely fast and responsive. Searching for niche digital products and checking out takes seconds. This is how all modern e-commerce should feel.",
    rating: 4,
  },
  {
    id: 5,
    name: "Aisha Patel",
    role: "Seller",
    initials: "AP",
    content: "I launched my digital art store last month and the community engagement is fantastic. The direct messaging feature helps me build real trust with my returning customers.",
    rating: 5,
  },
  {
    id: 6,
    name: "Tom Becker",
    role: "Store Manager",
    initials: "TB",
    content: "The analytics pipeline is phenomenal. I can see exactly which products are driving revenue and which ones need better descriptions. Cart-Flow gives me total control.",
    rating: 5,
  },
];

const RoleBadge = ({ role }: { role: Testimonial['role'] }) => {
  const styles = {
    'Buyer': 'bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border-blue-200 dark:border-blue-900',
    'Seller': 'bg-orange-50 text-orange-600 dark:bg-orange-950/40 dark:text-orange-400 border-orange-200 dark:border-orange-900',
    'Store Manager': 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900',
  };

  return (
    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${styles[role]}`}>
      {role}
    </span>
  );
};

export default function Testimonials() {
  return (
    <section className="w-full py-20 md:py-28 bg-white dark:bg-neutral-950 relative overflow-hidden">
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(theme(colors.neutral.200)_1px,transparent_1px)] dark:bg-[radial-gradient(theme(colors.neutral.800)_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold text-xs uppercase tracking-widest block mb-2">
            Community Feedback
          </span>
          <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white sm:text-4xl">
            What Our Users Say
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Join thousands of satisfied buyers, passionate sellers, and power-managers scaling their ecosystem on Cart-Flow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-xl hover:shadow-orange-600/5"
            >
              {/* Large faded quote icon in the background */}
              <Quote className="absolute top-6 right-6 h-12 w-12 text-neutral-200 dark:text-neutral-800 opacity-50 transition-transform duration-300 group-hover:scale-110 group-hover:text-orange-100 dark:group-hover:text-orange-950" />
              
              <div className="relative z-10 mb-6">
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'fill-orange-500 text-orange-500' : 'fill-neutral-200 text-neutral-200 dark:fill-neutral-700 dark:text-neutral-700'}`} 
                    />
                  ))}
                </div>
                
                {/* Review Content */}
                <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                  "{testimonial.content}"
                </p>
              </div>

              {/* User Info Footer */}
              <div className="relative z-10 flex items-center gap-3 pt-4 border-t border-neutral-200/80 dark:border-neutral-800/80">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold shadow-inner">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <RoleBadge role={testimonial.role} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}