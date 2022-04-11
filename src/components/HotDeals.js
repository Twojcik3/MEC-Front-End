import React, {useEffect, useState} from "react";
import Navigation from "./Navigation";
import axios from 'axios';
import HotDealsTable from "./HotDealsTable";

const HotDeals = () => {
    const API_URL = 'http://localhost:8000/api/';
    const [hotDeals, setHotDeals] = useState([]);
    useEffect(()=> {
        getHotDeals();
      })
    const getHotDeals = async () => {
        axios.get(`${API_URL}products/hot-deals`).then((response) => {
          setHotDeals(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className="App">
            <Navigation />
            <HotDealsTable items={hotDeals} />
        </div>
    )
}

export default HotDeals;