import { auth } from "@/lib/auth";
import { headers } from "next/headers";


interface Product {
    _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: number | string;
    description:string;
    buyerId:string;
  };

const CartPage = async() => {

const session = await auth.api.getSession({
    headers: await headers(),
  });

  const buyerId = session?.user?.id;

  if (!buyerId) {
    return <div>Please log in to view your cart.</div>;
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/cart/${buyerId}`, {
    cache: "no-store"
  });
  
  const products: Product[] = await res.json();

console.log(products)

    return (
        <div>
            
        </div>
    );
};

export default CartPage;