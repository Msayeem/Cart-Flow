"use client"
import {Button, Card, CloseButton} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


interface AllProductsProps {
  product: {
    _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: number | string;
    description:string;
  };
}

const CartItems = ({product}:AllProductsProps) => {

const router=useRouter();

const handleBuy= async()=>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cart/${product._id}`, {
    method: 'DELETE'
  });
    if (!res.ok) throw new Error("Failed to remove item from cart.");

    toast.success(`${product.productName} purchased successfully!`);
    router.refresh(); // re-runs the server component fetch so the list updates
  } 


const handleClose= async()=>{
     const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cart/${product._id}`, {
    method: 'DELETE'
  });
    if (!res.ok) throw new Error("Failed to remove item from cart.");

    toast.error(`${product.productName} removed from Cart.`);
    router.refresh(); // re-runs the server component fetch so the list updates
  } 
  


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
          <CloseButton onClick={handleClose} aria-label="Close banner" className="absolute top-3 right-3" />
        </Card.Header>
        <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-foreground">Price</span>
            <span className="text-xs text-muted">${product.price}</span>
          </div>
          <Button onClick={handleBuy} className="w-full bg-orange-600 hover:bg-orange-500 active:opacity-70 sm:w-auto">Buy Now</Button>
        </Card.Footer>
      </div>
    </Card>

        </div>
    );
};

export default CartItems;