import React from 'react';
import {viewState} from "../../recoil/ProductRecoil.js";

import {useRecoilValue} from "recoil";
const ColumnView = (props) => {
    return(
        <div className="column is-4 has-text-centered">
        {props.children}
        </div>
    )
};


const RowView = (props) => {
    return(
        <div className="column is-12 has-text-centered">
        {props.children}
        </div>
    )
}; 
export default function View(props) {
    const view = useRecoilValue(viewState);
    if(view == "column"){
        return <RowView>{props.children}</RowView>
    }else{
         return <ColumnView>{props.children}</ColumnView>
    }

    
}
