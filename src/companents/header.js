import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategoryList} from "../redux/action/action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping, faHeart} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const {shopListCategory: category} = useSelector(s => s)
    const dispatch = useDispatch()
    console.log(category)
    useEffect(() => {
        dispatch(getCategoryList())
    }, [])
    return (
        <div className="bg-slate-500 py-6">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <Link to={"/"}
                    className="py-2 text-white">Logo</Link>
                    <div className="flex justify-between w-6/12 text-white text-base align-middle">
                        {
                            category.map(el => (
                                <div key={el.id} className="py-2">
                                    <p>{el.title}</p>
                                </div>
                            ))
                        }
                        <div className="flex justify-between">
                            <Link to={'/shop-favorite'}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"><FontAwesomeIcon icon={faHeart}/></button>
                            </Link>
                            <Link to={'/shop-basket'}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><FontAwesomeIcon icon={faBagShopping}/></button>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;