import React,{Fragment} from 'react'
import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import Product from "../products/Product";
export default function Home() {
    return (
        <Fragment>
        <div>
           
            <div className="">
               <Navbar/>
            </div>
<div className="has-background-light">
  <div className="container">
    <div className="section">
      <div className="columns">
        <div className="column is-3">
          <div className="box">
            <Sidebar/>
          </div>
        </div>
        <div className="column is-9">
       <Product/>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    </Fragment>    
    )
}
