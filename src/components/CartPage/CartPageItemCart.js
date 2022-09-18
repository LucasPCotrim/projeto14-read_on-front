import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../contexts/UserContext';

export default function ItemCart ({productId}){

    const [listProducts, setListProducts] = useState([]);
    const {user, setUser} = useContext(UserContext);
    const [render, serRender] = useState(false);
    
        
        const item = user.products?.find(product => product._id === productId);

    return(
        <>
            {item.title}
        </>
    );
}