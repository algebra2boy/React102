import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import Layout from './routes/Layout.jsx';
import DetailView from './routes/DetailView';
import NotFound from './routes/NotFound.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                {/* index = true is the main page that we want to render  */}
                <Route index={true} element={<App />} />
                <Route index={false} path="/coinDetails/:symbol" element ={<DetailView />}/>
            </Route>
            <Route path="*" element={<NotFound />}></Route>
        </Routes>
    </BrowserRouter>
)
