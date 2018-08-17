import React from 'react';
import { Link } from 'react-router-dom'

export default props => {
    console.log('props in todo item: ', props)
    return (
        <li className='collection-item'>

            <Link to={`/item-details/${props.id}`}>
                {props.title}
                {props.complete ?
                    <i className="small material-icons">check</i>
                    :
                    <i className="small material-icons">close</i>
                }
            </Link>
    </li>
            );
        }
