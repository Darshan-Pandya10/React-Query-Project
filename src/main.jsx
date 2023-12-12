import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Components/Home.jsx'
import Products from './Components/Products.jsx'
import SingleProduct from './Components/SingleProduct.jsx'
import { createBrowserRouter , RouterProvider , Route, createRoutesFromElements } from 'react-router-dom'
import { QueryClient , QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='home' element={<Home/>}/>
      <Route path='products'>
          <Route index element={<Products/>} />
          <Route path=':productid' element={<SingleProduct/>} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
