import ProductDetails from '@/Components/ProductDetails';

interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

const ProductDetailsPage = async({params}: ProductDetailsPageProps) => {

const { id } = await params;

const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${id}`, {
        
    });
    const product = await res.json();

    return (
        <div>
            <ProductDetails product={product}></ProductDetails>
        </div>
    );
};

export default ProductDetailsPage;