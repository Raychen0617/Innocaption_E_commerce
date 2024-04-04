import React, { useState } from 'react';
import Payment from "../assets/payment.jpg";
const CheckoutForm: React.FC = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    // Add more state variables for other form fields

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="bg-customgray rounded-lg p-8 max-w-full mx-16 flex flex-col items-center justify-center">
            <div className="w-full mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="w-full mb-4">
                <label htmlFor="address" className="block mb-2 font-medium">
                    Address
                </label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="w-full mb-8">
                <label htmlFor="address" className="block mb-2 font-medium">
                    Email
                </label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
            <img src={Payment} alt="InnoCaption Icon" className="ml-4 w-80"/>

            {/* Add more form fields here */}
        </form>
    );
};

export default CheckoutForm;