import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Layout from "./Routes/Layout"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index={true} element={<App />} />
    </Route>
  </Routes>
</BrowserRouter>
)
