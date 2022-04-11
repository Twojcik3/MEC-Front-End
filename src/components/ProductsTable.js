import React from "react";
import Product from "./Product";

const ProductsTable = (props) => {
    return (
        <div className='container'>
                <div className='container__headers'>
                    <div className='container__header col-lg-3'>
                        <span>Nazwa Produkty</span>
                    </div>
                    <div className='container__header col-lg-1'>
                        <span>Dostępna ilosć</span>
                    </div>
                    <div className='container__header col-lg-1'>
                        <span>Cena</span>
                    </div>
                    <div className='container__header col-lg-2'>
                        <span>ID produktu</span>
                    </div>
                    <div className='container__header col-lg-2'>
                        <span>Zamów</span>
                    </div>
                    <div className='container__header col-lg-2'>
                        <span>Szczegóły</span>
                    </div>
                </div>
                <div className='container__content'>
                    {props.products.map((el) => {
                    return <Product key={el.id}  id={el.id} name={el.name} quantity={el.stock} price={el.price} productId={el.stockProductId}/>
                    })}
                </div>
        </div>
    )
}

export default ProductsTable;