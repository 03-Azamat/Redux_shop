import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {addToBasket, getProdDetail} from "../redux/action/action";
import {faBagShopping, faCheck, faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ShopDetails = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const {shopProductDetail: prodDetail} = useSelector(s => s)
    const {basket} = useSelector(s => s)
    const basketItems = basket.some( basket => basket.id === prodDetail.id)

    useEffect(() => {
        dispatch(getProdDetail(id))
    }, [])

    return (
        <div className="bg-gray-200 min-h-screen">
            <div className="container mx-auto ">
                <div className="py-20">
                    <div className="w-full h-full flex justify-between">
                        <img src={prodDetail.image} alt="image"
                             className="w-96 h-[50%] object-cover rounded-md"/>
                        <div className="w-[50%]">
                            <h1 className="text-3xl font-medium w-9/12">{prodDetail.title}</h1>
                            <p className="w-full">{prodDetail.description}</p>
                            <div className="flex justify-between">
                                {
                                    basketItems ? <button className="bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"><FontAwesomeIcon icon={faCheck}/>Добавлено</button> : <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                                        onClick={() => dispatch(addToBasket(prodDetail))}
                                    ><FontAwesomeIcon icon={faBagShopping}/> добавить в корзину</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopDetails;