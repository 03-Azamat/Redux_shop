import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCategoryList, getProdList} from "../redux/action/action";
import BooksCard from "./card/booksCard";
import Slider from "react-slick";
import Bg from  "./../img/image 112.png"


const Home = () => {
    const dispatch = useDispatch()
    const {shopProductList : product} = useSelector(s => s)
    const {shopListCategory: category} = useSelector(s => s)

    useEffect(() =>{
        dispatch(getProdList())
        dispatch(getCategoryList())
    },[])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="min-h-screen">
            <div className="w-full">
                <div className="w-full mx-auto">
                    <Slider
                        {...settings}>
                        <div className="bg-gray-900 w-full">
                            <img src={Bg} alt=""/>
                            1
                        </div>

                        <div className="bg-gray-900 w-full">
                            <img src={Bg} alt=""/>
                            2
                        </div>

                        <div className="bg-gray-900 w-full">
                            <img src={Bg} alt=""/>
                            3
                        </div>
                    </Slider>
                </div>
            </div>

            <div className=" container mx-auto p-10 flex-col md:flex-row items-center mx-auto ">
                <div className="flex flex-row flex-wrap ">
                    <h1 className="sm:text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-black py-5 font-bold">Категории</h1>

                    {
                        category.map(el => (
                            <div key={el.id} className="py-2">
                                <p>{el.title}</p>
                            </div>
                        ))
                    }
                    <h1 className="sm:text-center md:text-center lg:text-left xl:text-left text-3xl w-full text-black py-5 font-bold">Возможно, Вам понравится</h1>
                    {
                        product.map(el => (
                            <div key={el.id}>
                                <BooksCard el={el} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export default Home;