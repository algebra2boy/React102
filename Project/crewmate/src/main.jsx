import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from "./Routes/Layout"
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create/Create";
import Gallery from "./components/Gallery/Gallery.jsx";
import DetailView from './components/Gallery/DetailView.jsx';
import Update from './components/Gallery/Update.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
      <Route index={false} path ="create" element={<Create />} />
      <Route index={false} path ="gallery" element={<Gallery />} />
      <Route index={false} path ="/:id" element={<DetailView />}></Route>
      <Route index={false} path ="/update/:id" element={<Update />}></Route>
    </Route>
  </Routes>
</BrowserRouter>
)
