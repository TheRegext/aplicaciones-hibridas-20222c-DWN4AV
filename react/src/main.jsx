import React from 'react'
import ReactDOM from 'react-dom/client' // Web
import App from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root'))
.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
)
