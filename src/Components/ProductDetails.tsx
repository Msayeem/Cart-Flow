

interface Product {
   _id: string;
    productName: string;
    productType: string;
    imageUrl: string;
    price: number | string;
}

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = ({product}: ProductDetailsProps) => {
    return (
        <div>
            {product.productName}
        </div>
    );
};

export default ProductDetails;