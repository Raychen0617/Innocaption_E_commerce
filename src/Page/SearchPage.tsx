import React, { useEffect, useState } from "react";
import ShopPage from "../components/ShopComponent";
import { CartItem, ProductItem } from "../type/type";
import SearchComponent from "../components/SearchComponent";

const SearchPage: React.FC = () => {
    const [searchField, setSearchField] = useState("Search");
    const [filteredProducts, setFilteredProducts] = useState<ProductItem[]>([]);
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = sessionStorage.getItem(`cartItems`);
        return storedCartItems ? JSON.parse(storedCartItems) : [];
    });

    useEffect(() => {
        sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const { products } = data;
                const transformedProducts: ProductItem[] = products.map(
                    (product: any) => ({
                        img: product.images[0],
                        title: product.title,
                        newPrice: product.price,
                        company: product.brand,
                        category: product.category,
                    })
                );
                setFilteredProducts(transformedProducts);
            });
    }, []);

    const handleSearchReset = () => {
        fetch("https://dummyjson.com/products")
            .then((response) => response.json())
            .then((data) => {
                const { products } = data;
                const transformedProducts: ProductItem[] = products.map(
                    (product: any) => ({
                        img: product.images[0],
                        title: product.title,
                        newPrice: product.price,
                        company: product.brand,
                        category: product.category,
                    })
                );
                setFilteredProducts(transformedProducts);
            });
    };

    const handleSearch = async (searchField:string) => {
        const searchresults = await fetch('https://dummyjson.com/products/search?q=' + searchField);
        const data = await searchresults.json();
        const { products } = data;
        const transformedProducts: ProductItem[] = products.map(
            (product: any) => ({
                img: product.images[0],
                title: product.title,
                newPrice: product.price,
                company: product.brand,
                category: product.category,
            })
        );
        setFilteredProducts(transformedProducts);
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
