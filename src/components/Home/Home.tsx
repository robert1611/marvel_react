import React from 'react';
// TODO: Add Bootstrap here

interface Props{
    title: string;
    age: number;
}


export const Home = ( props:Props) => {
    // return needed for valid react code
    return (
        <div>
            <h1>Hello World from React</h1>
            <h4> { props.title } </h4>
          {/*  <h4> { props.age } </h4> */}
        </div>
    )
}