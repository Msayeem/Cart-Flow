import ManageProducts from '@/Components/ManageProducts';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ManagePage = async() => {

const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;

 interface Product {
    _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: number | string;
    description:string;
    userId:string;
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/user/${userId}`, {
    cache: "no-store"
  });
  
  const products: Product[] = await res.json();


    return (
        <div className="animate-fade-up min-h-screen bg-slate-50/50 py-12">
                    <div className="mx-auto w-[90%] max-w-7xl space-y-10">
                        
                        {/* Modernized Header Block */}
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-100 pb-8">
                            <div>
                                <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                                    Manage <span className="text-orange-600">Products</span>
                                </h1>
                                <p className="mt-2 text-sm text-slate-500">
                                    Edit and delete the products you have created.
                                </p>
                            </div>
                         
                        </div>
        
            </div>
        <div>
            {
                products.length>0 ?
products.map(product=><ManageProducts key={product._id} product={product}></ManageProducts>)
  :
  <h2 className="font-medium mt-30 text-slate-500 text-center">You have not created any products yet.</h2>     
}
        </div>
        </div>
    );
};

export default ManagePage;