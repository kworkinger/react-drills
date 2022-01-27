import React from 'react'
import { Routes, Route } from "react-router-dom"

import Products from './Products'
import Details from './Details'

export default (
    <Routes>
        <Route exact path='/' component={Products} />
        <Route path="/details/:id" component={Details} />
    </Routes>
)