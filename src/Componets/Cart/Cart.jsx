import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { Link } from 'react-router';

function Cart() {
    return (
        <div className="cart-container max-w-6xl mx-auto p-6">
            <div className='flex items-center pb-[50px]'>
                <Link to={'/'} className='text-2xl'><FaArrowLeftLong /></Link>
                <h1 className="text-3xl font-semibold  ps-[50px]">Your Cart</h1>
            </div>

            <div className="cart-items space-y-6">
                <div className="cart-item flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                        <img src="https://via.placeholder.com/100" alt="Product" className="w-24 h-24 object-cover mr-6" />
                        <div>
                            <h3 className="text-xl font-medium">Product Name</h3>
                            <p className="text-gray-500">$29.99</p>
                            <div className="mt-3 flex items-center space-x-3">
                                <button className="px-4 py-2 bg-gray-200 rounded-full">-</button>
                                <span className="text-lg">1</span>
                                <button className="px-4 py-2 bg-gray-200 rounded-full">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium">$29.99</span>
                        <button className="text-red-500 hover:text-red-700">Remove</button>
                    </div>
                </div>

                <div className="cart-item flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                        <img src="https://via.placeholder.com/100" alt="Product" className="w-24 h-24 object-cover mr-6" />
                        <div>
                            <h3 className="text-xl font-medium">Product Name</h3>
                            <p className="text-gray-500">$49.99</p>
                            <div className="mt-3 flex items-center space-x-3">
                                <button className="px-4 py-2 bg-gray-200 rounded-full">-</button>
                                <span className="text-lg">1</span>
                                <button className="px-4 py-2 bg-gray-200 rounded-full">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <span className="text-lg font-medium">$49.99</span>
                        <button className="text-red-500 hover:text-red-700">Remove</button>
                    </div>
                </div>
            </div>

            <div className="total mt-8 flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Total:</h2>
                <span className="text-xl font-medium">$79.98</span>
            </div>

            <div className="checkout mt-6">
                <button className="w-full py-3 bg-green-500 text-white rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    );
}

export default Cart;
