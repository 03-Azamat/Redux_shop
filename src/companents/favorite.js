import React from 'react';
import {RemoveProductBasket} from "../redux/action/action";
import {useDispatch, useSelector} from "react-redux";

const Favorite = () => {
    const {favorite: el} = useSelector(s => s)
    const dispatch = useDispatch()
    return (
        <div className="min-h-screen bg-indigo-50 py-5">
            <div className="w-8/12 mx-auto bg-white shadow-lg border rounded-md ">
                {
                    el.length === 0 ? <div>Корзина пусто!!!</div> :
                        <div>
                            <div className="w-[80%] mx-auto ">
                                {
                                    el.map((el, idx) => (
                                        <div className="py-3" key={el.id}>

                                            <hr className=" border-1 rounded mb-3"/>

                                            <div className="w-full  flex justify-between pt-5">
                                                <div className="w-[50%] flex justify-between ">
                                                    <img src={el.img} alt="image"
                                                         className="w-6/12 h-72 mr-2 object-cover rounded-md"/>
                                                    <p className="text-md pt-20 font-medium ">{el.name}</p>
                                                </div>
                                                <div className="flex flex-col w-[50%] text-right pr-10">
                                                    <p className="text-md pt-20 pr-16  font-medium">${el.price}</p>
                                                    <button
                                                        onClick={()=>dispatch(RemoveProductBasket(el.id))}
                                                        className="bg-gray-50 rounded shadow-lg py-3  text-blue-700  text-md mt-5 ml-48 font-medium">Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default Favorite;