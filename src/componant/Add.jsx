import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postdata } from '../toolkit/slices/UserSlice';

const Add = () => {

    let dispatch = useDispatch();
    const [users, setusers] = useState({});

    let getuserdata = (e) => {
        setusers({ ...users, [e.target.name]: e.target.value });

    }



    let handlesubmit = (e) => {
        e.preventDefault();
        dispatch(postdata({
            payload: users
        }))


    }

    return (
        <>

            <div className="addcomponant">
                <form onSubmit={handlesubmit}>
                    <fieldset>
                        <legend>Personal Information</legend>

                        <label for="first-name">First Name:</label>
                        <input type="text" id="first-name" name="firstname" onChange={getuserdata} />

                        <label for="last-name">Last Name:</label>
                        <input type="text" id="last-name" name="lastname" onChange={getuserdata} />

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" onChange={getuserdata} />

                    </fieldset>



                    <input type="submit" value="Submit" />
                </form>
            </div>


        </>
    )
}

export default Add
