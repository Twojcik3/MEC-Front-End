import React, {useState} from 'react';
import '../css/Product.css';
import Dialog from './Dialog';
const Product = (props) => {
    const [openDialog, setDialog] = useState(false);
    
    const handleDialog = (value) => {
        console.log(value);
        setDialog(value);
    }
    return (
        <div className='product__container col-lg-12 col-md-12'>
            <div className='product__container--field col-lg-3 col-md-3'>
                <span>{props.name}</span>
            </div>
            <div className='product__container--field col-lg-1 col-md-1'>
                <span>{props.quantity}</span>
            </div>
            <div className='product__container--field col-lg-1 col-md-1'>
                <span>{((props.price)/100).toFixed(2)}</span>
            </div>
            <div className='product__container--field col-lg-2 col-md-2'>
                <span>{props.productId}</span>
            </div>
            <div className='product__container--field col-lg-2 col-md-2'>
                <button className={parseInt(props.quantity) > 0 ? "btn-primary btn-sm btn" : "btn-primary btn-sm btn disabled"} onClick={(e) => handleDialog(true)}>Zamów</button>
            </div>
            <div className='product__container--field col-lg-2 col-md-2'>
                <button className="btn-primary btn-sm btn">Info</button>
            </div>
            {openDialog? <Dialog isOpen={openDialog} onClose={(e) => handleDialog(false)} id={props.id}>
                <div className='dialog__text'>Wybrany produkt to {props.name}. Podaj ilość sztuk:</div>
             </Dialog> : ''}
        </div>
    )
}

export default Product;