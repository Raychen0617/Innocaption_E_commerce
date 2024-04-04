import { User, ShoppingCartIcon } from "lucide-react";
import Icon from "../assets/icon.png"
import { useNavigate } from "react-router-dom";

const NavigationPage = () => {
    
    const navigate = useNavigate();

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 -mt-4 mb-8 bg-customBlue pb-8 pt-12 rounded-xl">
            <div className="flex flex-row justify-between ">
                <img src={Icon}  onClick={() => navigate("/")} alt="InnoCaption Icon" className="ml-4 w-64"/>
                <div className="flex flex-row">
                    <div className="mr-8 flex flex-row items-center justify-center ml-auto" onClick={() => navigate("/checkout")}>
                        <ShoppingCartIcon size={48} color="white" className="custom-nav-icon"/>
                        <span className="text-white">Cart</span>
                    </div>
                    <div className="mr-12 flex flex-row items-center justify-center ml-auto">
                        <User size={48} color="white" className="custom-nav-icon" />
                        <span className="text-white">Login</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavigationPage;
