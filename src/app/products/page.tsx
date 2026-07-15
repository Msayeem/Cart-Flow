// ProductsPage.tsx
import AllProducts from '@/Components/AllProducts';
import ProductFilters from '@/Components/ProductFilters';

interface Product {
  _id: string;
  productName: string;
  productType: string;
  imageUrl: string;
  price: number | string;
  description: string;
  warrenty: string;
}

interface ProductsPageProps {
  searchParams: Promise<{ search?: string; productType?: string; sort?: string }>;
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
  const { search, productType, sort } = await searchParams;

  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (productType) params.set('productType', productType);
  if (sort) params.set('sort', sort);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products?${params.toString()}`, {
    cache: "no-store",
  });

  const products: Product[] = await res.json();

  return (
    <div className="animate-fade-up min-h-screen bg-slate-50/50 py-12">
      <div className="mx-auto w-[90%] max-w-7xl space-y-10">
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

        <ProductFilters />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <AllProducts key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;