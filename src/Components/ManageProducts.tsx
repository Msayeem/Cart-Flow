"use client"
import { AlertDialog, Button, Card, CloseButton } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

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

    const router=useRouter();

    const handleDelete= async()=>{

         const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${product._id}`, {
        method:'DELETE',
        headers:{
             'content-type':'application/json',
            
        }
    });

    const result=await res.json();
   toast(`${product.productName} deleted.`, {
  icon: 'ℹ️',
});
    router.refresh()
    }

    return (
        
       <div className="flex justify-center mb-5">
                 
        <Card className="lg:w-[70%] w-[90%] shadow-2xl md:flex-row hover:scale-102 transition">
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
              <div className='flex items-center gap-3.5'>
                 <Link href={`/manage/${product._id}`}  ><Button className="w-full bg-black hover:bg-orange-500 active:opacity-70 sm:w-auto">Edit</Button></Link>
                 <AlertDialog>
      <Button variant="danger">Delete Product</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Product permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{product.productName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Product
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
              </div>
             </Card.Footer>
           </div>
         </Card>
     
             </div>
              
        
    );
};

export default ManageProducts;