import React from 'react'
import {Link} from "react-router-dom";
export default function Navbar() {
    return (
        <nav class="navbar">
  <div class="container">
    <div class="navbar-brand">
      <a class="navbar-item" href="/"><i class="fas fa-store fa-2x"></i></a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <Link class="button is-primary" to="addProduct"
              ><strong>Add Product</strong></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

    )
}
