import { CartItem } from "../type/type";
import { useEffect, useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import { MinusIcon, PlusIcon } from "lucide-react";

const CartPage = () => {
    
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = sessionStorage.getItem(`cartItems`);
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    const totalPrice = cartItems.reduce(
        (acc, item) => acc + parseFloat(item.price),
        0
    );

    const handleRemoveFromCart = (cartItem: CartItem) => {
        const indexToRemove = cartItems.findIndex(
            (item) => item.name === cartItem.name
        );

        if (indexToRemove !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(indexToRemove, 1);
            setCartItems(updatedCartItems);
        }
    };

    const handleAddToCart = (CartItem: CartItem) => {
        setCartItems([...cartItems, CartItem]);
    };

    return (
        <div className="flex flex-col justify-between p-4">
            <div className="flex flex-row justify-between items-start">
                <div className="w-1/2">
                    <CheckoutForm />
                </div>
                <div className="w-1/2 mr-28 flex flex-col mb-40">
                    <h3 className="mb-4 text-center font-semibold">
                        Total: {totalPrice}
                    </h3>
                    {cartItems.map((item) => (
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row justify-between rounded-lg border-2 p-4 mb-4 flex-grow">
                                <p className="mr-4">{item.name}</p>
                                <p className="w-8">${item.price}</p>
                            </div>
                            <button
                                onClick={() =>
                                    handleAddToCart({
                                        img: item.img,
                                        name: item.name,
                                        price: item.price,
                                    })
                                }
                            >
                                <PlusIcon
                                    size={32}
                                    className="ml-4 bg-customBlueLight rounded-md border-[2px] border-black p-[8px]"
                                />
                            </button>
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
                </div>
            </div>
        </div>
    );
};

export default CartPage;
