import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Counter from './containers/Counter'

export default (
  <Fragment>
    <Route path="/" exact compiler="TypeScript" framework="React" component={Home}></Route>
    <Route path="/counter" exact component={Counter}></Route>
  </Fragment>
)
