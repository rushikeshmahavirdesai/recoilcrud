import React,{useState, useEffect} from 'react';
import {productState} from "../../recoil/ProductRecoil.js";
import {useHistory, useParams} from "react-router-dom";
import {useSetRecoilState, useRecoilState} from "recoil";
import shortid from "shortid";

export default function EditProduct() {
  let {id} =useParams() 
  let history = useHistory();
  const [name, setName]=useState("")
  const [price, setPrice]=useState("")
  const [picture, setPicture]=useState("")
  const [type, setType]=useState("")
  const [products, setProducts]=useRecoilState(productState)
  const onSubmitFrom = e =>{
    e.preventDefault()
    const new_product = {
      name,
      price,
      picture,
      type
     
    };
    // setProducts((oldProducts) => [new_product, ...oldProducts])
     const update_product = products.map(product => product.id == id ? new_product : product)
     setProducts(update_product)
   // console.log(name,price,picture,type)
   history.push("/")
  };



  useEffect(() => {
    const product=products.find(product => product.id == id);
      setName(product.name);
    setPrice(product.price);
    setPicture(product.picture)
    setType(product.type)

  }, [])
  return (
  <div className="container">
  <div className="section">
    <div class="card">
      <div className="card-header">
        <p className="card-header-title">Update A product</p>
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
