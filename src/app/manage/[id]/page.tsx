import EditProducts from "@/Components/EditProducts";


interface ProductDetailsPageProps {
  params: Promise<{ id: string }>;
}

const EditProduct = async({params}: ProductDetailsPageProps) => {
    
    const { id } = await params;

const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/products/${id}`, {
        
    });
    const product = await res.json();
    
    return (
        <div>
            <EditProducts product={product}></EditProducts>
        </div>
    );
};

export default EditProduct;