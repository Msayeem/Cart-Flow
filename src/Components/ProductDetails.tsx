"use client"
import { authClient } from "@/lib/auth-client";
import { MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import toast from "react-hot-toast";


interface Product {
   _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: number | string;
    warrenty: string;
    sellerName: string;
    description:string;
    sellerEmail:string;
    buyerId?:string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({product}: ProductDetailsProps) => {

    const router=useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;
 

  const handleCart=async()=>{

  const { _id, ...rest } = product;
  const cartItem = { ...rest, productId: _id, buyerId: user?.id };

try {
      const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;
      if (!serverUrl) {
        throw new Error("NEXT_PUBLIC_SERVER_URL environment variable is missing.");
      }

      const res = await fetch(`${serverUrl}/cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Fixed lowercase string mismatch
        },
        body: JSON.stringify(cartItem)
      });

      if (!res.ok) {
        throw new Error("Product already exists in Cart.");
      }

      // 5. Explicitly type the response data if you plan to use it
      const data: { success: boolean; id?: string } = await res.json();

      toast.success(`${product.productName} added to Cart`);
      router.push('/cart');
    } catch (error) {
      router.push('/cart')
      toast.error(error instanceof Error ? error.message : 'Something went wrong.');
    
    }
  }

    return (
<main className="min-h-screen bg-slate-50/60 py-12">
            <div className="mx-auto w-[90%] max-w-6xl space-y-8">
                
                {/* Modern Header Section */}
                <div className="border-b border-slate-200 pb-6">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-700 mb-3">

                        <span>{product.productType} Category</span>
                    </div>
                    <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                        {product.productName}
                    </h1>
                    <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span>Verified by Cart-Flow</span>
                    </p>
                </div>

                {/* Main 2-Column Split Layout */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-start">
                    
                    {/* Left Side: Media Display & Core Information Cards */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* High Quality Banner Image Container */}
                        <div className="relative h-[300px] sm:h-[400px] w-full overflow-hidden rounded-2xl bg-slate-200 border border-slate-100 shadow-sm">
                            <Image 
                                className="h-full w-full object-cover object-center"
                                src={product?.imageUrl} 
                                fill
                                sizes="(max-w-1024px) 100vw, 66vw"
                                alt={product?.productName}
                                priority
                            />
                        </div>

                        {/* Facility Details Feature Grid */}
                        <div>
                            

                            <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-xs">
                                
                                <div>
                                    <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider">Seller Info</span>
                                    <p className="font-medium text-slate-400 text-sm mt-0.5">Seller Name: {product.sellerName}</p>
                                    <p className="font-medium text-slate-400 text-sm mt-0.5">Seller Email: {product.sellerEmail}</p>
                                </div>
                            </div>
                        </div>


                        <div>
                            

                            <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-xl shadow-xs">
                                
                                <div>
                                    <span className="text-xs font-bold text-slate-800 block uppercase tracking-wider">Warrenty</span>
                                    <p className="font-medium text-slate-500 text-sm mt-0.5">{product.warrenty} years</p>

                                </div>
                            </div>
                        </div>

                          

                        {/* Informational Banner */}
                        <div className="rounded-xl border border-slate-100 bg-white p-5 flex gap-4 items-start shadow-xs">
                            
                            <div>
                                <h3 className="font-bold text-slate-900 text-sm">Description</h3>
                                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                                {product.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Sleek Pricing & Action Checkout Widget */}
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md shadow-slate-100/60 lg:sticky lg:top-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Price</span>
                        
                        {/* Hero Pricing Display */}
                        <div className="flex items-baseline gap-1 text-slate-900 border-b border-slate-100 pb-5">
                            <span className="text-4xl font-black tracking-tight text-orange-600">${product?.price}</span>

                        </div>

                       {
                        user?
                         <div className="flex items-center gap-5">
                            <button onClick={()=>{toast.success(`${product.productName} purchased successfully!`); router.push('/products')}} className="bg-orange-600 font-medium text-white px-7 py-2 rounded-[12px] hover:bg-orange-500 active:opacity-70">Buy Now</button>
                            <button onClick={handleCart} className="bg-black font-medium text-white px-7 py-2 rounded-[12px] hover:bg-orange-600 active:opacity-70">Add to Cart</button>
                        </div>
                        :
                        <Link className="font-medium animate-pulse text-2xl" href={'/login'}>Please login to buy products.</Link>
                       }



                        <div className="flex items-center gap-2.5 rounded-xl bg-slate-50 p-3.5 mb-6 text-xs text-slate-600 border border-slate-100">
                            <ShieldCheck className="h-4 w-4 text-green-600 shrink-0" />
                            <span>Instant purchase confirmation handled securely by Cart-Flow portal layers.</span>
                        </div>

          

                        <span className="block text-center text-[11px] text-slate-400 mt-3 font-medium">
                            No hidden service fees applied at checkout
                        </span>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default ProductDetails;