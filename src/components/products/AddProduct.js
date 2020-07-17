import React,{useState} from 'react';
import {productState} from "../../recoil/ProductRecoil.js";
import {useHistory} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import shortid from "shortid";

export default function AddProduct() {

  let history = useHistory();
  const [name, setName]=useState("")
  const [price, setPrice]=useState("")
  const [picture, setPicture]=useState("")
  const [type, setType]=useState("")
  const setProducts = useSetRecoilState(productState)
  const onSubmitFrom = e =>{
    e.preventDefault()
    const new_product = {
      name,
      price,
      picture,
      type,
      id:shortid.generate()
    };
    setProducts((oldProducts) => [new_product, ...oldProducts])
   // console.log(name,price,picture,type)
   history.push("/")
  }
  return (
  <div className="container">
  <div className="section">
    <div class="card">
      <div className="card-header">
        <p className="card-header-title">Add A product</p>
      </div>
      <div class="card-content">
        <form onSubmit={onSubmitFrom}>
          <div className="columns">
            <div className="column is-3">
              <input
                class="input"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Product Name"
              />
            </div>
            <div className="column is-3">
              <input
                class="input"
                type="text"
                 value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Product Price"
              />
            </div>
            <div className="column is-3">
              <input class="input" type="text" 
               value={picture}
              onChange={(e) => setPicture(e.target.value)}
              placeholder="Product Picture" />
            </div>
            <div className="column is-3">
              <div class="select is-fullwidth">
                <select  value={type}
                onChange={(e) => setType(e.target.value)}>
                  <option>Select Product Type</option>
                  <option value="fruit">fruit</option>
                  <option value="vegetables">vegetables</option>
                  <option value="beverages">beverages</option>
                  <option value="meals">meals</option>
                  <option value="utensils">utensils</option>
                </select>
              </div>
            </div>
            <div className="column is-3"></div>
          </div>
          <button className="button is-primary">Add Product</button>
        </form>
      </div>
    </div>
  </div>
</div>

  );
}
