import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from "./Routes/Layout"
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create/Create"


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
      <Route path ="create" index={false} element={<Create />} />
    </Route>
  </Routes>
</BrowserRouter>
)
