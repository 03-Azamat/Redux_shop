import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProdList} from "../redux/action/action";
import Card from "./card/card";

const Home = () => {
    const dispatch = useDispatch()
    const {shopProductList : product} = useSelector(s => s)

    useEffect(() =>{
        dispatch(getProdList())
    },[])
    return (
        <div className="min-h-screen">
            <div className=" container mx-auto p-10 flex-col md:flex-row items-center mx-auto ">
                <h1 className="sm:text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-black py-5 font-bold">Магазин</h1>

                <div className="flex flex-row flex-wrap ">
                    {
                        product.map(el => (
                            <div key={el.id}>
                                <Card el={el} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;