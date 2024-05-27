import React from 'react'
import Banner from './Banner'
import Products from './Products'
import New from './New'
import Info from './Info'

function Home() {
  return (
    <main>
      <Banner/>
      <Products/>
      <New/>
      <Info/>
    </main>
  )
}

export default Home