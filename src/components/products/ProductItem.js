import React from 'react'
import {useRecoilState} from "recoil";
import {productState} from "../../recoil/ProductRecoil.js";
import {Link} from "react-router-dom";
import View from "../layouts/View";
const ProductItem = (props) => {
    const {product}=props;
    const [products, setProducts]=useRecoilState(productState)
    const deleteProduct = id => {
      const new_products=products.filter(product => product.id != id)
      setProducts(new_products)
    }
  return (
   
                     <View>
                         <div className="box box__custom">
                     <Link to={`/editProduct/${product.id}`} className="button is-warning button-edit">Edit</Link>
                      <button onClick={() => deleteProduct(product.id)} href="!#" className="button is-danger button-delete">Delete</button>
                       <h1 className="title is-1">{product.picture}</h1>
                        <h2 className="subtitle is-5">{product.name}</h2>
                         <h4 className="subtitle is-6">${product.price}.00/Kg</h4>
                     </div>
                     </View>
                  
  )
}

export default ProductItem
