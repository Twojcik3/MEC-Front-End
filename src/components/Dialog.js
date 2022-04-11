import axios from "axios";
import React, { useState} from "react";
let dialogStyles = {
    width: '500px',
    maxWidth: '100%',
    margin: '0 auto',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    zIndex: '999',
    backgroundColor: '#eee',
    padding: '10px 20px 40px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column'
};

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};

const Dialog = (props) => {
    const [productQuantity, setProductQuantity] = useState(0);
    const [status, setStatus] = useState();
    const [sending, setSending] = useState(true);
    const API_URL = 'http://localhost:8000/api/';

    const handleProductQuantity = (e) => {
        setProductQuantity(e.target.value)
    }
    const handleStatus = (value) => {
        setStatus(value);
    }
    const handleSending = (value) => {
        setSending(value);
    }
    
    const submitOrder = async (e) => {
        handleSending(true);
        e.preventDefault();
        if (productQuantity > 0) {
            axios.post(`${API_URL}order/${productQuantity}/${props.id}`).then((result) => {
                console.log(result)
                handleStatus(true)
            }).catch((err) => {
                console.log(err);
                handleStatus(false);
            })
        }
        handleSending(false);
    }
    const dialog = (
        <div style={dialogStyles}>
            <button style={dialogCloseButtonStyles} onClick={props.onClose}>X</button>
            <div>{props.children}</div>
            <input type="number" min="1" placeholder="ilość sztuk" onChange={handleProductQuantity}></input>
            <button className="btn-primary btn-sm btn" onClick={submitOrder}>Zamawiam</button>
            {sending ? '' : status ? <p>Złożono zamówienia</p> : <p>Niepoprawne zamówienie</p>}

        </div>
    )
    return(
        <div>
            {dialog}
        </div>
    )
};

export default Dialog;