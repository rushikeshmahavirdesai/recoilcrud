import React from 'react'
import {filteredProducts} from "../../recoil/ProductRecoil.js";
import {useRecoilValue} from "recoil";
import ProductItem from "./ProductItem";

export default function Product() {
 //   const products = useRecoilValue(productState);
       const products = useRecoilValue(filteredProducts);
    return (
        <div className="columns is-multiline">
            {
                products.map(product => (
                   <ProductItem key={product.id} product={product}/>
                ))
            }
        </div>
    )
}
