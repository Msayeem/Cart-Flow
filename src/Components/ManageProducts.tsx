import { Button, Card, CloseButton } from '@heroui/react';
import React from 'react';

interface AllProductsProps {
  product: {
    _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: number | string;
    description:string;
    userId:string;
  };
}

const ManageProducts = ({product}: AllProductsProps) => {


    return (
       <div className="flex justify-center mb-5">
                 
        <Card className="w-3xl shadow-2xl md:flex-row hover:scale-105 transition">
           <div className="relative h-[140px] w-full shrink-0 overflow-hidden rounded-2xl sm:h-[120px] sm:w-[120px]">
             <img
               alt={product.productName}
               className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
               loading="lazy"
               src={product.imageUrl}
             />
           </div>
           <div className="flex flex-1 flex-col gap-3">
             <Card.Header className="gap-1">
               <Card.Title className="pr-8">{product.productName}</Card.Title>
               <Card.Description>
                 {product.description}
               </Card.Description>
               
             </Card.Header>
             <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
               <div className="flex flex-col">
                 <span className="text-sm font-medium text-foreground">Price</span>
                 <span className="text-xs text-muted">${product.price}</span>
               </div>
              <div className=''>
                 <Button  className="w-full bg-black hover:bg-orange-500 active:opacity-70 sm:w-auto mr-3.5">Edit</Button>
               <Button  className="w-full bg-orange-600 hover:bg-orange-500 active:opacity-70 sm:w-auto">Buy Now</Button>
              </div>
             </Card.Footer>
           </div>
         </Card>
     
             </div>
    );
};

export default ManageProducts;