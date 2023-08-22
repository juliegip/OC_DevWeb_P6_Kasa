import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
import Home from './pages/Home/P_Home'
import About from './pages/About/P_About'
import Error from './components/Error/Error'
import RootLayout from './layout/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
}

export default App
