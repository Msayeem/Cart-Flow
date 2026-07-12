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
        <div>
            {
                products.length>0 ?
products.map(product=><ManageProducts key={product._id} product={product}></ManageProducts>)
  :
  <h2 className="font-medium mt-30 text-slate-500 text-center">You have not created any products yet.</h2>     
}
        </div>
    );
};

export default ManagePage;