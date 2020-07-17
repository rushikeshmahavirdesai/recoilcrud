import React from 'react'
import {viewState, searchTextState,ProductFileredText, productFilterCount} from "../../recoil/ProductRecoil.js";
import {useRecoilState, useRecoilValue} from "recoil";
export default function Sidebar() {
  const itemCount=useRecoilValue(productFilterCount);
       const [filter, setFilter]=useRecoilState(ProductFileredText);
      const [view, setView ]=useRecoilState(viewState);
     const [search, setSearchText] = useRecoilState(searchTextState)
    return (
       <div className="columns is-multiline">
  <div className="column is-12">
    <h2 className="subtitle">({itemCount}) products</h2>
    <div className="field has-addons">
      <div className="control">
        <button onClick={() => setView("column")} className={`button ${view == "column" ? `is-dark`:null} `}>
          <i class="fas fa-th-large"></i>
        </button>
      </div>
      <div className="control">
        <button onClick={() => setView("row")} className={`button ${view == "row" ? `is-dark`:null} `}>
          <i class="fas fa-grip-horizontal"></i>
        </button>
      </div>
    </div>
    <h3 className="subtitle is-6 mb-2">Search Products</h3>
    <input class="input" 
    type="text"
    value={search} 
    onChange={(e) => setSearchText(e.target.value)}
     placeholder="Search your product..." />
  </div>
  <div className="column is-12">
    <h3 className="subtitle is-6 mb-2">Filter</h3>
    <div class="select is-fullwidth">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">show all</option>
        <option value="fruit">fruit</option>
        <option value="vegetables">vegatables</option>
        <option value="meals">meals</option>
        <option value="beverages">beverages</option>
        <option value="utensils">utensils</option>
      </select>
    </div>
  </div>
</div>

    )
}
