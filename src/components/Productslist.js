import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { fetchProducts } from "../store/productActions";

const ProductList = (props) => {
    console.log(props.users);
    console.log(props.loading);
    console.log(props.error);
    const [users, setusers] = useState([]);
    

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        props.dispatch(fetchProducts());
        //console.log(users);
    },[]);

    return (

        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    );
}

const map1StateToProps = state => ({
    users: state.users.items,
    loading: state.users.loading,
    error: state.users.error
  })

export default connect(map1StateToProps)(ProductList);
