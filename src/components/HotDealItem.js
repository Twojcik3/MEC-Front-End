import React from "react";

const HotDealItem = (props) => {
    return(
        <div className='product__container col-lg-12 col-md-12'>
            <div className='product__container--field col-lg-4 col-md-4'>
                <span>{props.name}</span>
            </div>
            <div className='product__container--field col-lg-4 col-md-4'>
                <span>{props.quantity}</span>
            </div>
            <div className='product__container--field col-lg-4 col-md-4'>
                <span>{props.id}</span>
            </div>
        </div>
    )
}

export default HotDealItem;