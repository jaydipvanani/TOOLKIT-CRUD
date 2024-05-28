import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
    









    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to={"/add"}>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">add</a>
                                </li>
                            </Link>
                            <Link to={"/show"}>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">show</a>
                                </li>
                            </Link>
                            <Link to={"/filter"}>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">filter</a>
                                </li>
                            </Link>


                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit" >Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserNavbar
