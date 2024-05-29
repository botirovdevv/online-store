import React from 'react'
import About from "../about/About"
import Users from './Users'
import Info from '../../components/main/Info'

function Index() {
  return (
    <div>
        <About/>
        <Users/>
        <Info/>
    </div>
  )
}

export default Index