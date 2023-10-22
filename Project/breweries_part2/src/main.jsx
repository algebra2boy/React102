import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BrewInfo from "./components/BrewInfo.jsx"
import './index.css'
import Layout from "./Routes/Layout"
import NotFound from './Routes/NotFound.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/brewinfo/:id" element={<BrewInfo />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>
)
