import { SearchIcon } from "lucide-react";
import CartComponent from "./CartComponent";
import { CartItem } from "../type/type";

const SearchComponent = ({
    searchField,
    handleSearch,
    setSearchField,
    handleSearchReset,
    cartItems,
    handleRemoveFromCart,
}: {
    searchField: string;
    handleSearch: (searchField: string) => Promise<void>;
    setSearchField: (value: string) => void;
    handleSearchReset: () => void;
    cartItems: CartItem[];
    handleRemoveFromCart: (cartitem: CartItem) => void;
}) => {
    const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            await handleSearch(searchField);
        }
    };

    return (
        <div className="flex flex-col items-center ml-8 px-2">
            <div className="flex items-center relative">
                <input
                    className="inline-block rounded-xl border-2 border-black mt-4 pl-10 py-2 pr-4 text-semibold"
                    type="text"
                    value={searchField}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setSearchField(e.target.value)}
                />
                <div className="absolute inset-y-9 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="w-6 h-6 text-gray-600" />
                </div>
            </div>

            <div className="flex flex-row items-center justify-center">
                <button
                    className="mt-4 px-4 custom-button bg-customBlueLight"
                    onClick={handleSearchReset}
                >
                    Reset
                </button>
            </div>
            <div className="px-12 mx-4 mt-20 rounded-2xl border-[3px] shadow-lg">
                <CartComponent
                    cartItems={cartItems}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
        </div>
    );
};

export default SearchComponent;
