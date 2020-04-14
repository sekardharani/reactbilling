import React from 'react';
import { ADD_PRODUCT } from "../store/action";
import {connect} from "react-redux"

const addtodoitem = () => {
    const todoObj = {
        id:Math.random(),
        todo:"sekar",
        isCompleted:false
    }
}    

const Addproduct =  (props) => {
 
return (
      <div>
      <input type="text" />
      <button onClick={props.addProduct}>Add Product</button>
      </div>
  );
}

const addproductlisttostore = (dispath) =>{
    return {
        addProduct: (todoObj) =>{ 
            dispath(addtodoitem(todoObj))
         }
    };
}

const addstore = connect(null, addproductlisttostore);

export default addstore(Addproduct);
