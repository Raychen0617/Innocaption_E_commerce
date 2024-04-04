import React, { useEffect, useState } from "react";
import products from "../data/data";
import ShopPage from "../components/ShopComponent";
import { CartItem } from "../type/type";
import SearchComponent from "../components/SearchComponent";

const SearchPage: React.FC = () => {

    const [searchField, setSearchField] = useState("Search");
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = sessionStorage.getItem(`cartItems`);
        return storedCartItems ? JSON.parse(storedCartItems) : [];  
    });

    useEffect(() => {
        sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    // Dummy API
    useEffect(() => {
        fetch('//dummyjson.com/test')
            .then(res => res.json())
            .then(data => {
                setFilteredProducts(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearchReset = () => {
        setSearchField("Search");
        setFilteredProducts(products);
    };

    const handleSearch = () => {
        if (searchField.trim() === "" || searchField === "Search") {
            setFilteredProducts(products);
        } else {
            const filteredProducts = products.filter(
                (product) =>
                    product.category
                        .toLowerCase()
                        .startsWith(searchField.toLowerCase()) ||
                    product.title
                        .toLowerCase()
                        .includes(searchField.toLowerCase()) ||
                    product.company
                        .toLowerCase()
                        .startsWith(searchField.toLowerCase())
            );
            setFilteredProducts(filteredProducts);
        }
    };

    const handleAddToCart = (CartItem: CartItem) => {
        setCartItems([...cartItems, CartItem]);
    };

    const handleRemoveFromCart = (cartitem: CartItem) => {
        const indexToRemove = cartItems.findIndex(
            (item) => item.name === cartitem.name
        );

        if (indexToRemove !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems.splice(indexToRemove, 1);
            setCartItems(updatedCartItems);
        }
    };

    return (
        <div className="flex flex-row justify-end">
            <div className="fixed top-50 left-0 z-10 w-1/5 items-center">
                <SearchComponent
                    searchField={searchField}
                    handleSearch={handleSearch}
                    setSearchField={setSearchField}
                    handleSearchReset={handleSearchReset}
                    cartItems={cartItems}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
            <div className="fixed top-30 right-0 z-10 w-3/4 h-full overflow-y-auto">
                <ShopPage
                    filteredProducts={filteredProducts}
                    handleAddToCart={handleAddToCart}
                    handleRemoveFromCart={handleRemoveFromCart}
                />
            </div>
        </div>
    );
};

export default SearchPage;
