import React from 'react';
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className="bg-[#010049]">
            <div className="container mx-auto flex justify-between">
                <div className="flex flex-col">
                    <Link to={"/"} className="mt-16 text-white font-medium text-2xl">BOOKShop</Link>
                </div>
                <div className="flex flex-col py-6">
                    <Link to={"/"} className=" py-2 text-white font-medium ">Способ оплаты</Link>
                    <Link to={"/"} className=" py-2 text-white font-medium ">Условия доставки</Link>
                    <Link to={"/"} className=" py-2 text-white font-medium ">Правила покупки</Link>
                </div>
                <div className="flex flex-col py-6">
                    <Link to={"/"} className=" py-2 text-white font-medium ">FAQ</Link>
                    <Link to={"/"} className=" py-2 text-white font-medium ">О нас</Link>
                </div>
                <div className="flex flex-col py-6">
                    <h3 className=" py-2 text-white font-medium ">Связаться с нами:</h3>
                    <h3 className=" py-2 text-white font-medium ">+996 222 533 735</h3>
                    <h3 className=" py-2 text-white font-medium ">+996 222 533 735</h3>
                    <h3 className=" py-2 text-white font-medium ">+996 222 533 735</h3>
                    <div className="flex ">
                        {/*<a href="#" className="px-1"><FontAwesomeIcon icon={"instagram"}/></a>*/}
                        {/*<a href="#" className="px-1"><FontAwesomeIcon icon={"instagram"}/></a>*/}
                        {/*<a href="#" className="px-1"><FontAwesomeIcon icon={"instagram"}/></a>*/}
                        {/*<a href="#" className="px-1"><FontAwesomeIcon icon={"instagram"}/></a>*/}
                    </div>
                </div>
                <div className="py-6">
                    <h1 className="py-2 text-white font-medium text-center">Адрес</h1>
                    <p className="py-2 text-white font-normal">
                        Lorem ipsum dolor sit amet, consectetur <br/>
                        adipiscing elit. Varius in dolor viverra feugiat <br/>
                        neque, sed in. Mattis volutpat malesuada <br/>
                        velit parturient aliquam, est. Mauris vitae velit <br/>
                        laoreet faucibus nec amet velit.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;