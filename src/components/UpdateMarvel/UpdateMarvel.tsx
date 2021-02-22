import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { server_calls } from '../../api';
import { Container } from 'react-bootstrap';
import '../../styles.css';

type Inputs = {
    name: string,
    character: string,
    super_power: number
}

export const UpdateMarvel = () => {

    {/* Set up communication of state via the router location */}
    const location:any = useLocation();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => {
        console.log(data, location)
        server_calls.update(location.state.marvel_id, data)

    }


    return (
        <Container>
            <h1>Update Your Marvel Character</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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

                <button type="submit" className="button-styles"> Submit </button>
            </form>
        </Container>
    )
}