import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/shared/Layout'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import { MenuProvider } from "./components/context/Menucontext";


 
function App() {
  return (
    <MenuProvider>
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={ <Layout/>} >
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products/> } />
          <Route />
        </Route>
        <Route path="login" element={<div>Login Page</div> } />
      </Routes>
    
    </BrowserRouter>
    </MenuProvider>
    
  );
}

export default App;
