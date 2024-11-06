import { headerContext } from '@/contexts/headerContext'
import React, { useContext } from 'react';
import Styles from "./index.less"
let cont = 1;
export default function Card(props) {
    const value = useContext(headerContext);
    console.log("arguments", arguments);
    cont++;
    console.log("count", cont);
    const children = props.children;

    return (
        <div className='card-box out'>
            {children ? children : null}
        </div>
    )

}

