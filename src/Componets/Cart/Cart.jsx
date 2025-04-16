import React, { useEffect, useState } from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { MdDeleteForever } from 'react-icons/md';
import { Link } from 'react-router';

function Cart({ category, setCategory, paperCartProduct, setPaperCartProduct,snackCartProduct,setSnackCartProduct }) {

    const [combineProduct, setCombineProduct] = useState([...category, ...paperCartProduct,...snackCartProduct]);
    const [quantities, setQuantities] = useState(Array(combineProduct.length).fill(1));

    useEffect(() => {
        const updatedCombineProduct = [...category, ...paperCartProduct,...snackCartProduct];
        setCombineProduct(updatedCombineProduct);

        const updatedQuantities = updatedCombineProduct.map((_, index) => quantities[index] || 1);
        setQuantities(updatedQuantities);
    }, [category, paperCartProduct]);

    const handleIncrement = (index) => {
        const updated = [...quantities];
        updated[index] += 1;
        setQuantities(updated);
    };

    const handleDecrement = (index) => {
        const updated = [...quantities];
        if (updated[index] > 1) updated[index] -= 1;
        setQuantities(updated);
    };

    const handleDelete = (id) => {

        const updatedCategory = category.filter((item) => item.id !== id);
        setCategory(updatedCategory);

        const updatedPaperCartProduct = paperCartProduct.filter((item) => item.id !== id);
        setPaperCartProduct(updatedPaperCartProduct);

        const updateSnackproduct = snackCartProduct.filter((data)=>{
            return data.id !== id
        })
        setSnackCartProduct(updateSnackproduct)
    };

    const totalPrice = () => {
        return combineProduct.reduce((total, product, id) => {
            return total + product.price * (quantities[id] || 0)
        }, 0)
    }





    return (
        <div className="cart-container max-w-6xl mx-auto p-6">
            <div className='flex items-center pb-[50px]'>
                <Link to={'/'} className='text-2xl w-10 h-10 rounded-2xl bg-gray-100 flex justify-center items-center'><FaArrowLeftLong /></Link>
                <h1 className="text-3xl font-semibold  ps-[50px]">Your Cart</h1>
            </div>

            <div className="cart-items space-y-6">
                {combineProduct.length > 0 ? (
                    combineProduct.map((productCart, index) => (
                        <div
                            key={index}
                            className="cart-item flex items-center justify-between border-b pb-4"
                        >
                            <div className="flex items-center">
                                <img
                                    src={productCart.img}
                                    alt="Product"
                                    className="w-24 h-24 object-cover mr-6"
                                />
                                <div>
                                    <h3 className="text-[18px] xl:text-xl font-medium">{productCart.title}</h3>
                                    <p className="text-gray-500 pt-3 ">{productCart.dec}</p>
                                    <div className="mt-3 flex items-center space-x-3 ">
                                        <button
                                            className="px-4 py-2 bg-gray-200 rounded-full"
                                            onClick={() => handleDecrement(index)}
                                        >
                                            -
                                        </button>
                                        <span className="text-lg">{quantities[index]}</span>
                                        <button
                                            className="px-4 py-2 bg-gray-200 rounded-full"
                                            onClick={() => handleIncrement(index)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className="text-lg font-medium pt-3">₹{productCart.price}</span>
                                <button
                                    className="text-red-500 pt-3 hover:text-red-700 cursor-pointer text-[20px]"
                                    onClick={() => handleDelete(productCart.id)}
                                >
                                    <MdDeleteForever />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-gray-500 text-xl">
                        Your cart is empty!
                    </div>
                )}
            </div>

            <div className="total mt-8 flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Total:</h2>
                <span className="text-xl font-medium">
                    ₹{totalPrice().toFixed(2)}
                </span>
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
