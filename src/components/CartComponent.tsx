import { useNavigate } from "react-router-dom";
import { CartItem } from "../type/type";
import { MinusIcon } from "lucide-react";

const CartComponent = ({
    cartItems,
    handleRemoveFromCart,
}: {
    cartItems: CartItem[];
    handleRemoveFromCart: (cartitem: CartItem) => void;
}) => {
    const totalPrice = cartItems.reduce(
        (acc, item) => acc + parseFloat(item.price),
        0
    );

    const navigate = useNavigate();

    return (
        <div className="my-6 flex flex-col items-center justify-center">
            <p className="mr-4 mb-4 font-bold">
                Total: ${totalPrice.toFixed(2)}
            </p>
            {cartItems.slice(0, 6).map((item) => (
                <div className="flex flex-row my-2 items-center justify-start ml-6">
                    <p className="w-32 mr-4 truncate">{item.name}</p>
                    <p className="w-8">${item.price}</p>
                    <button
                        onClick={() =>
                            handleRemoveFromCart({
                                img: item.img,
                                name: item.name,
                                price: item.price,
                            })
                        }
                    >
                        <MinusIcon
                            size={32}
                            className="ml-4 bg-customBlueLight rounded-md border-[2px] border-black p-[8px]"
                        />
                    </button>
                </div>
            ))}
            {cartItems.length > 6 && (
                <p className="mt-2">And {cartItems.length - 6} more items...</p>
            )}
            {cartItems.length > 0 && (
                <button
                    className="mt-4 hover:bg-blue-600 bg-customBlue text-white rounded-lg font-bold py-2 px-4 rounded"
                    onClick={() => navigate("/checkout")}
                >
                    Checkout
                </button>
            )}
        </div>
    );
};

export default CartComponent;
