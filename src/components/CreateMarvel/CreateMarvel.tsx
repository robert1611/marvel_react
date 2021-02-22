import React from 'react';
import { useForm } from 'react-hook-form';
import {server_calls } from '../../api';
import { Jumbotron, Container, Col, Row } from 'react-bootstrap';

type Inputs = {
    name: string,
    character: string,
    super_power: string
}

export const CreateMarvel = () => {
       // Creating a deconstructed value for useForm hook
       const { register, handleSubmit } = useForm<Inputs>();
       // Don't necessarily need <Inputs> in above line but it's safer
       

const onSubmit = (data:any) => {
       console.log(data)

       let newChar = {...data,"date_created":new Date().getTime(),
     }
       server_calls.create( newChar)

    //   server_calls.create(  {
    //     // "comics_appeared_in": data.comics_appeared_in,
    //      "comics_appeared_in":Number(data.comics_appeared_in),
    //      "date_created":  new Date().getTime(),
    //      "description": data.description,
    //      "name": data.name,
    //      "super_power": data.super_power,
    //      "character": data.character
    //    })
    

   }

       return (
       <Container>
           <h1>Create Your Marvel Character</h1>
           <form onSubmit = {handleSubmit(onSubmit)}>
               <label htmlFor="name">Name</label>
               <input type="text" name="name" id="name" placeholder="Add Marvel Name" ref={ register }/>

               <label htmlFor="character">Marvel Character</label>
               <input type="text" name="character" id="character" placeholder="Add Marvel Character" ref={ register }/>
               
               <label htmlFor="super_power">Super Power</label>
               <input type="text" name="super_power" id="super_power" placeholder="Add Super Power" ref={ register }/>
               
               <label htmlFor="description">Description</label>
               <input type="text" name="description" id="description" placeholder="Add Description" ref={ register }/>
               
               <label htmlFor="comics_appeared_in">Comics Appeared In</label>
               <input type="number" name="comics_appeared_in" id="comics_appeared_in" placeholder="Comics Appeared in" ref={ register }/>
               
               <button type="submit" className="button-styles">Submit Character</button>
           </form>
       </Container>
   )
}