import React, { useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import { routes } from './helpers/routes';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import "./assets/styles/Main.scss"

function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <Routes>
        {routes.map((item) => (
          <Route path={item.path} element={item.element} key={item.path} />
        ))}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App