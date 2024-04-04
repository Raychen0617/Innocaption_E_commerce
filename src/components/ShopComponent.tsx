import ProductCard from "./ProductCard";
import { ProductItem } from "../type/type";

interface ShopPageProps {
    filteredProducts: ProductItem[];
    handleAddToCart: (cartItem: any) => void;
    handleRemoveFromCart: (cartItem: any) => void;
}

const ShopPage = ({
    filteredProducts,
    handleAddToCart,
    handleRemoveFromCart,
}: ShopPageProps) => {
    if (!Array.isArray(filteredProducts)) {
        return <div>No products available</div>;
    }

    return (
        <div className="flex flex-wrap mb-40">
            {filteredProducts.map((product, index) => (
                <div key={index} className={`px-2 w-1/3`}>
                    <ProductCard
                        img={product.img}
                        title={product.title}
                        newPrice={product.newPrice}
                        company={product.company}
                        color={product.color}
                        category={product.category}
                        handleAddToCart={handleAddToCart}
                        handleRemoveFromCart={handleRemoveFromCart}
                    />
                </div>
            ))}
        </div>
    );
};

export default ShopPage;
