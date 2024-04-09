import React from "react";
import { CartItem } from "../type/type";
interface ProductCardProps {
    img: string;
    title: string;
    newPrice: string;
    company: string;
    category: string;
    handleAddToCart: (cartItem: CartItem) => void;
    handleRemoveFromCart: (cartItem: CartItem) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
    img,
    title,
    newPrice,
    company,
    handleAddToCart,
}) => {
    return (
        <div className="flex flex-col items-center justify-center rounded-lg p-2 my-2 h-68 w-84 shadow-lg">
            <img src={img} alt={title} className="w-48 h-32 my-4" />
            <div className="flex flex-col justify-start">
                <h3 className="font-medium ">{title.length > 20 ? title.slice(0, 20) + "..." : title}</h3>
                <div className="flex flex-row justify-between font-semibold text-gray-500">
                    <span className="text-sm">{company}</span>
                    <span className="text-sm">${newPrice}</span>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        onClick={() =>
                            handleAddToCart({
                                img: img,
                                name: title,
                                price: newPrice,
                            })
                        }
                        className="mt-4 max-w-[200px] hover:bg-blue-600 bg-customBlue text-white rounded-lg font-semibold py-2 px-4 rounded"
                    >
                        Add To Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
