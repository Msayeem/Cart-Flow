import AllProducts from '@/Components/AllProducts';

const ProductsPage = async () => {

 interface Product {
    _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: number | string;
    description:string;
    warrenty:string;
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`, {
    cache: "no-store"
  });
  
  const products: Product[] = await res.json();

  return (
 <div className="min-h-screen bg-slate-50/50 py-12">
            <div className="mx-auto w-[90%] max-w-7xl space-y-10">
                
                {/* Modernized Header Block */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-100 pb-8">
                    <div>
                        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                            All <span className="text-orange-600">Products</span>
                        </h1>
                        <p className="mt-2 text-sm text-slate-500">
                            Discover, search and sort products according to your specific needs.
                        </p>
                    </div>
                 
                </div>

    <div>
     
   

      {products.map((product) => (
        <AllProducts key={product._id as string} product={product} />
      ))}
    </div>      
                
            </div>
        </div>
  );
};

export default ProductsPage;