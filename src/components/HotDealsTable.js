import React from "react";
import HotDealItem from "./HotDealItem";

const HotDealsTable = (props) => {
    return(
        <div className='container'>
                <div className='container__headers'>
                    <div className='container__header col-lg-4'>
                        <span>Nazwa Produkty</span>
                    </div>
                    <div className='container__header col-lg-4'>
                        <span>Ilość sprzedanych sztuk</span>
                    </div>
                    <div className='container__header col-lg-4'>
                        <span>ID produktu</span>
                    </div>
                </div>
                <div className='container__content'>
                    {props.items.map((item) => {
                        return <HotDealItem key={item.stockProductId} id={item.stockProductId} name={item.name} quantity={item.sumQuantity} />
                    })}
                </div>
        </div>
    )
}

export default HotDealsTable;