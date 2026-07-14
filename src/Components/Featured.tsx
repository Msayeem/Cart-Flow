import Link from "next/link";
import AllProducts from "./AllProducts";

interface Product {
  _id: string;
  productName: string;
  productType: string;
  imageUrl: string;
  price: number | string;
  description: string;
  warrenty: string; // Keeps your exact spelling
}

const Featured = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`, {
    cache: "no-store",
  });

  const products: Product[] = await res.json();
  
  // Strict limit of exactly 4 products
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="w-full py-16 bg-neutral-50/50 dark:bg-neutral-950/10">
      
      {/* Title Header (width is max-w-7xl) */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-orange-600 font-semibold text-xs uppercase tracking-widest">Our Handpicked Selection</span>
          <h2 className="text-3xl font-extrabold text-neutral-900 dark:text-white mt-1">Featured Products</h2>
        </div>
        <p className="text-neutral-500 text-sm italic lg:hidden">
          Hover over items to pause automatic scrolling
        </p>
      </div>

      {/* Bounded Scroll Arena: Aligns exactly with the header limit above */}
      <div className="max-w-7xl mx-auto px-6 relative overflow-hidden">
        
        {/* Decorative fading edges - only visible while overflow/scrolling is active on smaller screens */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-50 to-transparent dark:from-neutral-950 lg:hidden" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-50 to-transparent dark:from-neutral-950 lg:hidden" />
        
        {/* 
          Container Row:
          - By default (mobile/tablet), it aligns as a single animated row.
          - At 'lg' breakpoints (large screens), the animation turns off, and it converts into a clean 4-column grid spanning the header's width.
        */}
        <div className="flex w-max gap-6 animate-alternate-scroll hover:[animation-play-state:paused] py-4 lg:grid lg:grid-cols-4 lg:w-full lg:animate-none lg:gap-6 lg:px-0">
          {featuredProducts.map((product) => (
            <div 
              key={product._id} 
              className="w-[280px] sm:w-[290px] lg:w-full shrink-0 transition-transform duration-300 hover:-translate-y-1"
            >
              <AllProducts product={product} />
            </div>
          ))}
        </div>

      </div>
      <div className="text-center">
              <Link href={'/products'}><button className="bg-orange-500 text-white px-7 py-2 font-medium rounded-2xl hover:bg-orange-600 active:opacity-70">View all</button></Link>

      </div>
    </div>
  );
};

export default Featured;