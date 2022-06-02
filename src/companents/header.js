import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBagShopping} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="bg-[#010049] py-6">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <Link to={"/"}
                          className="py-2 text-white">BOOKShop</Link>
                    <Link to={'/shop-basket'}>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            <FontAwesomeIcon icon={faBagShopping}/></button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Header;