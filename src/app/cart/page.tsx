import CartItems from "@/Components/CartItems";
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



    return (
        <div>

             <h1 className="text-3xl mb-5 mt-5 ml-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            My <span className="text-orange-600">Cart</span>
                        </h1>
            
  {
    products.length>0 ?
    products.map(product=><CartItems key={product._id} product={product}></CartItems>)
  :
  <h2 className="font-medium mt-30 text-slate-500 text-center">Your Cart is empty.</h2>

}

        </div>
    );
};

export default CartPage;