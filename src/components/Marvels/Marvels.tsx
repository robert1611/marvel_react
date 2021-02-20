import React, { useEffect, useState } from 'react';
import { useGetData } from '../../custom-hooks';
// TODO: Import Bootstrap

export const Marvels = () => {

    let { marvelData, getData } = useGetData();
    console.log(marvelData)
    
    const [count,setCount] = useState(0);

    useEffect( () => {
    document.title = `You clicked the button ${count} times`
}) 
    // }, []) would only do useEffect once

return (
    <div>
        <h1>Hello Marvel Characters</h1>
        <h2>The Count is { count }</h2>
        <button onClick={ () => setCount(count + 1)}>
            Click To Add More
        </button>
    </div>
)
} 
    
