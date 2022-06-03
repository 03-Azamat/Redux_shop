import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategory, getCategoryList, getProdList} from "../../redux/action/action";
import BooksCard from "./booksCard";
import CategoryCart from "./categoryCart";
import Slider from "react-slick";
import CategotyCartTwo from "./categotyCartTwo";

const Categories = () => {
    const {idCategory} = useParams()
    const dispatch = useDispatch()
    const {shopProductList : product} = useSelector(s => s)
    const {shopIdCategory : cateqory} = useSelector(s => s)
    const {shopListCategory: cate} = useSelector(s => s)

    useEffect(()=>{
        dispatch(getCategory(idCategory))
        dispatch(getProdList())
        dispatch(getCategoryList())
    },[])

    const categorySettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const books = product.filter(el => el.category === cateqory.id)
    return (
        <div className="container mx-auto">
            <Slider
                {...categorySettings}>
                {
                    cate.map(el => (
                        <div key={el.id} className="py-2">
                            <CategotyCartTwo el={el}/>
                        </div>
                    ))
                }
            </Slider>
            <div className="flex justify-between py-5">
                <h1 className="pl-4 sm:text-center md:text-center lg:text-left xl:text-left text-sm w-full py-5 font-medium text-[#010049]"><span className="sm:text-center md:text-center lg:text-left xl:text-left text-sm w-full py-5 font-medium text-gray-400">Главная</span> / {cateqory.title}</h1>
            </div>
            <div className="flex justify-between flex-wrap">
                {
                    books.map(el => (
                        <div className="sm:basis-1  md:basis-1/2 lg:basis-1/3 xl:basis-1/4 text-center flex justify-center font-robot" key={el.id}>
                            <div
                                className="text-gray-900 my-4 body-font mx-3">

                                <div className="w-full">
                                    <Link to={`/shop-details/${el.id}`}>
                                        <img src={el.image} alt="image"
                                             className="w-full h-96 object-cover rounded-md"/>
                                    </Link>
                                </div>

                                <span className="flex flex-col mt-3 text-black">
                            <p className="text-left font-bold text-black text-xl">{el.price} сом</p>
                        <h4 className="font-head font-medium pb-5 w-60 text-left font-light text-sm">{el.title}</h4>
                    </span>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;