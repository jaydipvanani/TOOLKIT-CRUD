import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletedata, updatedata } from '../toolkit/slices/UserSlice';
import { logDOM } from '@testing-library/react';

const Show = () => {
    const [view, setview] = useState()

    const [radioData, setRadioData] = useState();



    let dispatch = useDispatch();
    let { user, isloading, isError } = useSelector((state) => state.user)
    if (isloading) {
        return (
            <>

                <div className="main">
                    <div class="loading" data-splitting >
                        LOADING
                    </div>

                    <div class="dwf">done with fun - @uchardon &copy; 2018</div>
                </div>
            </>
        )
    }
    if (isError) {
        return isError
    }

    let handledelete = (id) => {
        console.log(id);
        dispatch(deletedata(id))
    }
    let handlesubmit = (id) => {
        console.log(id);
        let viewdata = user.find((item) => item.id == id)
        setview(viewdata)
    }

    let handleview = (e) => {
        setview({ ...view, [e.target.name]: e.target.value })

    }


    let handleUpdate = () => {

        dispatch(updatedata({ id: view.id, payload: view }))


    }
    return (
        <div className="container">
            <div className="row">
                <div className='d-flex flex-wrap'>
                    <input
                        class="form-check-input"
                        name="gender"
                        checked={radioData === ""}
                        type="radio"
                        onChange={(e) => setRadioData("")}
                    />
                    <label class="form-check-label">All</label>
                    <input
                        class="form-check-input"
                        name="email"
                        checked={radioData === "Ed91@yahoo.com"}
                        value="Ed91@yahoo.com"
                        type="radio"
                        onChange={(e) => setRadioData(e.target.value)}
                    />
                    <label class="form-check-label">yahoo</label>
                    <input
                        class="form-check-input"
                        name="email"
                        value="Gabrielle22@gmail.com"
                        checked={radioData === "Gabrielle22@gmail.com"}
                        type="radio"
                        onChange={(e) => setRadioData(e.target.value)}
                    />
                    <label class="form-check-label">gmail</label>
                    
                    
                    {
                        user?.filter((ele) => {
                            if (radioData === "Ed91@yahoo.com") {
                              return ele.email === radioData;
                            } else if (radioData === "Gabrielle22@gmail.com") {
                              return ele.email === radioData;
                            } else return ele;
                          })

                          
                          .map((val, ind) => {
                            return (
                                <>


                                    <div class="card" style={{ width: "18rem" }}>
                                        <div class="card-body">
                                            <h5 class="card-title">{val.firstname}</h5>
                                            <h6 class="card-subtitle mb-2 text-body-secondary">{val.lastname}</h6>
                                            <p class="card-text">{val.email}</p>
                                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handlesubmit(val.id)}>update</button>
                                            <button onClick={() => handledelete(val.id)}>delete</button>
                                        </div>
                                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form onSubmit={handleUpdate} >
                                                            <fieldset>
                                                                <legend>Personal Information</legend>

                                                                <label for="first-name">First Name:</label>
                                                                <input type="text" i name="firstname" value={view?.firstname} onChange={handleview} />

                                                                <label for="last-name">Last Name:</label>
                                                                <input type="text" name="lastname" value={view?.lastname} onChange={handleview} />

                                                                <label for="email">Email:</label>
                                                                <input type="email" id="email" name="email" value={view?.email} onChange={handleview} />

                                                                <div class="modal-footer">
                                                                    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" >Save changes</button>
                                                                </div>
                                                            </fieldset>

                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>


                            )
                        })



                    }
                </div>
            </div>
        </div>
    )
}

export default Show


