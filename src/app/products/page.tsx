import AllProducts from '@/Components/AllProducts';

const ProductsPage = async () => {

 interface Product {
    _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: number | string;
  };

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products`, {
    cache: "no-store"
  });
  
  const products: Product[] = await res.json();

  return (
    <div>
      {/* Fixed the syntax to render correctly */}
      {products.map((product) => (
        <AllProducts key={product._id as string} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;