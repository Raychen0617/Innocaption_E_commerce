import "./index.css";
import NavigationPage from "./Page/NavigationPage";
import { Navigate, Route, Routes } from "react-router-dom";
import SearchPage from "./Page/SearchPage";
import CartPage from "./Page/CartPage";

function App() {

    return (
        <div>
            <NavigationPage />
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="mt-36 flex flex-col">
                            <SearchPage />
                        </div>
                    }
                />
                <Route
                    path="/checkout"
                    element={
                        <div className="mt-36 flex flex-col">
                            <CartPage />
                        </div>
                    }
                />
                <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
        </div>
    );
}

export default App;
