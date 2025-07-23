import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Fragment } from 'react'
import { Slide, ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
    <Fragment>
    <App />
    <ToastContainer position="top-right" theme="dark" autoClose={1500} transition={Slide} />
    </Fragment>
)
