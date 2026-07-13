"use client"
import { DollarSign } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// ✅ Added: Tell TypeScript exactly what fields to expect on the product prop
interface AllProductsProps {
  product: {
    _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: number | string;
    description:string;
    warrenty:string;
  };
}

// ✅ Applied the interface type to the component arguments
const AllProducts = ({ product }: AllProductsProps) => {
    return (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div
                        className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-500 ease-out transform
                            hover:-translate-y-1.5 hover:shadow-xl hover:shadow-green-900/5 hover:ring-orange-200
                        `}
                    >
                        {/* Image Container with Floating Sport Tag */}
                        <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                            <span className="absolute left-4 top-4 z-10 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-xs">
                                {product.productType}
                            </span>
                            <Image
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                src={product.imageUrl}
                                width={500} 
                                height={300}
                                alt={product.productName}
                            />
                        </div>

                        {/* Card Meta Content Block */}
                        <div className="flex flex-1 flex-col p-6">
                            <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors group-hover:text-orange-600">
                                {product.productName}
                            </h2> 

                            <p className="text-xs text-slate-500 leading-relaxed mt-1">
                                {product.description}
                                </p>


                            {/* Clean Pricing Layout Block */}
                            <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-4 text-sm">
                                <span className="text-slate-500">Price</span>
                                <div className="flex items-center text-orange-600 font-bold text-base">
                                    <DollarSign className="h-4 w-4 shrink-0 stroke-[2.5]" />
                                    <span>{product.price}</span>
                                </div>
                            </div>

                            {/* Button Anchor - mt-auto guarantees precise uniform heights */}
                            <div className="mt-auto pt-6">
                                <Link
                                    href={`/products/${product._id}`}
                                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-orange-500 hover:shadow-lg hover:shadow-green-500/20"
                                >
                                   
                                    View
                                </Link>
                            </div>
                        </div>
                    </div>
          </div>
    );
};

export default AllProducts;